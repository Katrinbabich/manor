import {makeAutoObservable} from "mobx";
export default class DeviceStore {
    constructor() {
        this._types = []
        this._names =[]
        this._devices = []
        this._baskets = []
        this._selectedType = {}
        this._selectedName={}
        this._page = 1
        this._totalCount = 0
        this._limit = 5
        this._selectedName = {}

        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }
    setNames(names) {
        this._names = names
    }

    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedName(name) {
        this._selectedName = name
    }
    get selectedName() {
        return this._selectedName
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    get types() {
        return this._types
    }
    get names(){
        return this._names
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    setBaskets(basket){
        this._baskets = basket
    }
    get basket() {
        return this._baskets
    }

    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}