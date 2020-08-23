/* eslint-disable */
const { getAllProductbyMadanhmuc } = require('../../../02.Business/productBus');
const { getProductbyMadanhmuc, } = require('../../../02.Business/productBus');
const { getNameCategoriesBus, } = require('../../../02.Business/categoryBus');

const category = async(req, res, next) => {
    try {
        const { id } = req.params;
        const { page } = req.params;
        const name = await getNameCategoriesBus(id);
        const products = await getAllProductbyMadanhmuc(id, page);
        const productsnumber = await getProductbyMadanhmuc(id);
        let aa = productsnumber.length / 15;
        if (0 < aa && aa < 1) {
            aa = 1
        }
        aa = aa.toFixed(0);
        let pagenumber = [];
        for (let i = 0; i < aa; i += 1) {
            if (i + 1 === page) {
                pagenumber[i] = { pages: i + 1, aa: "active", id: id };
            } else {
                pagenumber[i] = { pages: i + 1, aa: "", id: id };
            }

        }
        let nextt, pre;
        if (page === 1) {
            let temp = (page * 1 + 1 * 1)
            nextt = "/category/" + id + "&page=" + temp;
            pre = "/category/" + id + "&page=" + page
        }
        if (page === aa) {
            let temp = page * 1 - 1 * 1
            if (temp === 0) {
                temp = 1 * 1
            }
            nextt = "/category/" + id + "&page=" + page;
            pre = "/category/" + id + "&page=" + temp;
        }
        const sosanpham = productsnumber.length;
        const nameDanhmuc = name.tendanhmuc;
        return res.render('category/index', {
            products,
            number: pagenumber,
            next: nextt,
            pre: pre,
            name: nameDanhmuc,
            numbersanpham: sosanpham,
        });
    } catch (error) {
        next(error);
    }
};
module.exports = {
    category,
};