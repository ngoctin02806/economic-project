/* eslint-disable */
const { getAllProductbyMadanhmuc } = require('../../../02.Business/productBus');
const { getProductbyMadanhmuc, getAllProductsbySearchBus, getnumAllProductsbySearchBus } = require('../../../02.Business/productBus');
const { getNameCategoriesBus, } = require('../../../02.Business/categoryBus');

const category = async(req, res, next) => {
    try {
        const { id } = req.params;
        const { page } = req.params;
        const name = await getNameCategoriesBus(id);
        let products = await getAllProductbyMadanhmuc(id, page);
        for (let i = 0; i < products.length; i++) {
            console.log(products[i].soluongtong);
            if (products[i].soluongtong == 0) {
                products[i].hethang = "Hết"
            } else {
                products[i].new = "New"
            }
            console.log(products[i]);
        }

        const productsnumber = await getProductbyMadanhmuc(id);
        let aa = productsnumber.length / 15;
        if (0 < aa && aa < 1) {
            aa = 1
        }
        aa = aa.toFixed(0);
        let pagenumber = [];
        for (let i = 0; i < aa; i += 1) {
            if (i + 1 === page * 1) {
                pagenumber[i] = { pages: i + 1, aa: "active", herf: "/category/" + id + "&page=" + (i + 1) * 1 };
            } else {
                pagenumber[i] = { pages: i + 1, aa: "", herf: "/category/" + id + "&page=" + (i + 1) * 1 };
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
const search = async(req, res, next) => {
    try {
        const { page } = req.params;
        const { search } = req.query;

        const products = await getAllProductsbySearchBus(1, search);
        for (let i = 0; i < products.length; i++) {

            if (products[i].soluongtong == 0) {
                products[i].hethang = "Hết"
            } else {
                products[i].new = "New"
            }

        }
        const numpruduct = await getnumAllProductsbySearchBus(search)
        const namea = "Tìm kiếm sản phẩm";
        let aa = numpruduct.length / 15;
        if (0 < aa && aa < 1) {
            aa = 1
        }
        aa = aa.toFixed(0);
        let pagenumber = [];
        for (let i = 0; i < aa; i += 1) {
            if (i + 1 === page * 1) {
                pagenumber[i] = { pages: i + 1, aa: "active", herf: "/search/page=" + (i + 1) * 1 + "?search=" + search };
            } else {
                pagenumber[i] = { pages: i + 1, aa: "", herf: "/search/page=" + (i + 1) * 1 + "?search=" + search };
            }

        }

        let nextt, pre;
        if (page === 1) {
            let temp = (page * 1 + 1 * 1)
            nextt = "/search/" + "&page=" + temp + "search=" + search;
            pre = "/search/" + "&page=" + page + "search=" + search;
        }
        if (page === aa) {
            let temp = page * 1 - 1 * 1
            if (temp === 0) {
                temp = 1 * 1
            }
            nextt = "/search/" + "&page=" + page + "search=" + search;
            pre = "/search/" + "&page=" + temp + "search=" + search;
        }
        return res.render('category/index', {
            products,
            number: pagenumber,
            next: nextt,
            pre: pre,
            name: namea,
            numbersanpham: numpruduct.length,
        });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    category,
    search,
};