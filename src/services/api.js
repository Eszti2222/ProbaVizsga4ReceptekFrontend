import axios from "axios";

export const getReceptek= async(adat)=>{
    const response= await axios.get(`/api/receptek`); //elküld egy GET kérést
    return response.data;//ez az, amit a böngészőben látunk
};
export const createReceptek= async(adat)=>{
    const response= await axios.post(`/api/receptek`,adat);
    return response.data;
};
export const deleteReceptek= async(id)=>{
    const response= await axios.delete(`/api/receptek/${id}`);
     
};
export const getSzures= async(kat_id)=>{
    const response= await axios.get(`/api/receptek/kategoriak/${kat_id}`);
    return response.data;
};


export const getKategoriak = async () => {
    const response = await axios.get(`/api/kategoriak`);
    return response.data;
};


/*
backend rout-ok:
Route::get('/receptek', [ReceptekController::class, 'index']);
Route::post('/receptek', [ReceptekController::class, 'store']);
Route::delete('/receptek/{id}', [ReceptekController::class, 'destroy']);
Route::get('/receptek/kategoriak/{kat_id}', [ReceptekController::class, 'szures']);
Route::get('/kategoriak', [KategoriakController::class, 'index']);
*/