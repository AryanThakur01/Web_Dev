const product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
    const products = await product.find({ price: { $gt: 50 } })
        .sort('price')
        .select('name price')
    res.status(200).json({ products, nbHits: products.length });
}

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields, numericFilters } = req.query;
    const queryObject = {}
    if (featured)
        queryObject.featured = featured === 'true' ? true : false;
    if (company)
        queryObject.company = company;
    if (name)
        queryObject.name = { $regex: name, $options: 'i' };

    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }
        const regEx = /\b(>|>=|=|<|<=)\b/g
        let filters = numericFilters.replace(
            regEx,
            (match) => `-${operatorMap[match]}-`
        )
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach(item => {
            const [field, operator, value] = item.split(`-`);
            if (options.includes(field))
                queryObject[field] = { [operator]: Number(value) };
        });
    }

    // sort
    let sortList = '', fieldsList = '';

    sortList = sort ? sort.split(',').join(' ') : sortList
    fieldsList = fields ? fields.split(',').join(' ') : fieldsList;


    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 8;
    const skip = (page - 1) * limit;

    const productCount = await (await product.find(queryObject)).length;

    const result = await product.find(queryObject)
        .sort(sortList)
        .select(fieldsList)
        .limit(limit)
        .skip(skip)

    const products = await result;
    if (Number(req.query.page)) {
        res.status(200).json({ products, nbHits: products.length, productCount })
        return
    }
    res.status(200).render('index', { products, nbHits: products.length, productCount });
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
};