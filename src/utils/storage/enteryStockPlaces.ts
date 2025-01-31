import {EntryStockPlace} from "../../types";
import {getMaterialById} from "./materials";

export const getEntryStockPlaces = (): EntryStockPlace[] | null => {
    const entryStockPlacesRaw = localStorage.getItem("entryStockPlaces");
    if (!entryStockPlacesRaw) return null;
    return JSON.parse(entryStockPlacesRaw) as EntryStockPlace[];
}

export const updateEntryStock = (places: string[], materialId: string) => {
    const stockPlaces = getEntryStockPlaces() || [];
    if (!getMaterialById(materialId)) throw new Error("The material not Found");

    const placesSet = new Set(places);

    let changedPlaces = stockPlaces.map((stockPlace) => {
        if (placesSet.has(stockPlace.id)) {
            placesSet.delete(stockPlace.id);
            return {
                ...stockPlace,
                material_id: materialId
            }
        }

        return stockPlace;
    });

    placesSet.forEach(place => {
        changedPlaces.push({
            id: place,
            material_id: materialId
        })
    });
    localStorage.set("entryStockPlaces", changedPlaces);
}

export const removeEntryStockPlaces = (places: string[]) => {
    const stockPlaces = getEntryStockPlaces();
    if(!stockPlaces) return null;

    const placesSet = new Set(places);

    const data = stockPlaces.filter(place =>
        !placesSet.has(place.id)
    );

    localStorage.set("entryStockPlaces", data);
}