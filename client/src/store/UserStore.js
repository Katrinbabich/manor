import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._isAdmin = false
        this._user = {}
        this._isRole = {}
        makeAutoObservable(this)
    }
    setIsAdmin(bool) {
        this._isAdmin = bool
    }
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get isRole(){
        return this._isRole
    }
    get userRole() {
        return this._user.role;
    }
    get isAdmin() {
        return this._isAdmin
    }



}
