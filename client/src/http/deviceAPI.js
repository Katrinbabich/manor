import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId, page, limit= 5) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

// ------ Добавляю подключение для добавление crud с корзиной ------- //

export const addToBasket = async (deviceId) => {
    const {response} = await $authHost.post('api/basket', deviceId)
    return response
}
export const getBasket = async () => {
    const {data} = await $authHost.get('api/basket')
    return data
}


export const deleteOneBasket = async (id) => {
    const { data } = await $authHost.delete("api/basket/" + id);
    return data;
};
export const deleteAll = async () => {
    const { data } = await $authHost.delete("api/basket");
    return data;
};

////////
export const deleteOneType = async (id) => {
    const { data } = await $authHost.delete('api/type/' + id)
    return data
}
export const updateType = async (type) => {
    const { data } = await $authHost.put('api/type', type)
    return data
}
export const deleteOneDevice = async (id) => {
    const { data } = await $authHost.delete('api/device/' + id)
    return data
}
export const updateDevice = async (device) => {
    const { data } = await $authHost.put('api/device/', device)
    return data
}



export const deleteFromBasket = async (id) => {
    const {response} = await $authHost.post("api/basket/delete", {id:id})
    return response
}




