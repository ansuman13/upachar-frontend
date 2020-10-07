import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
const BASE_URL = 'https://upachar.com.np/'

function* loadNTopProducts() {
    yield* takeLatest("FETCH_N_TOP_PRODUCTS", fetchProducts);
}

function* fetchProducts(action) {
    try {
        const url_2 = `api/v1/pharmacy/hitcount/products?top=${this.payload}`
        const data = yield fetch(url_2)
        yield put({ type: 'TOP_N_PRODUCTS_LOADED', data })
    }
    catch (err) {
        yield put({ type: 'TOP_N_PRODUCT_FETCH_FAILED', err })
    }
}
