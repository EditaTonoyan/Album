import axios from 'axios';

export const getimagetechThunk = (data) => (dispatch) => {
    dispatch({ type: "set_or_remuve_spinner", isOpenSpinner: true })

    axios.get(`${process.env.REACT_APP_UNSPLASH_SEARCH_URL}`, {
        params: { query: "technology" },
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLUSH_KEY}`
        }
    })
        .then((response) => {
            if (response.error)
                throw response.error;
            data = response.data.results
            dispatch({ type: "get_images", data })
        })
        .catch(error => {
            console.log("error", error)

        })
        .finally(() => {
            dispatch({ type: "set_or_remuve_spinner", isOpenSpinner: false })
        })

}

export const getimageArtThunk = (data) => (dispatch) => {
    dispatch({ type: "set_or_remuve_spinner", isOpenSpinner: true })

    axios.get(`${process.env.REACT_APP_UNSPLASH_SEARCH_URL}`, {
        params: { query: "art" },
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLUSH_KEY}`
        }
    })
        .then((response) => {
            if (response.error)
                throw response.error;
            data = response.data.results
            dispatch({ type: "get_images", data })
        })
        .catch(error => {
            console.log("error", error)

        })
        .finally(() => {
            dispatch({ type: "set_or_remuve_spinner", isOpenSpinner: false })
        })
}

export const getimageThunk = (data) => (dispatch) => {
    dispatch({ type: "set_or_remuve_spinner", isOpenSpinner: true })

    axios.get(`${process.env.REACT_APP_UNSPLASH_SEARCH_URL}`, {
        params: { query: "spirituality" },
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLUSH_KEY}`
        }
    })
        .then((response) => {
            if (response.error)
                throw response.error;
            data = response.data.results
            dispatch({ type: "get_images", data })
        })
        .catch(error => {
            console.log("error", error)

        })
        .finally(() => {
            dispatch({ type: "set_or_remuve_spinner", isOpenSpinner: false })
        })

}

export const getAllImagesThunk = (data) => (dispatch) => {
    dispatch({ type: "set_or_remuve_spinner", isOpenSpinner: true })
    axios.get(`${process.env.REACT_APP_UNSPLUSH_URL}?client_id=${process.env.REACT_APP_UNSPLUSH_KEY}`

    )
        .then((res) => {
            if (res.error)
                throw res.error;
            data = res.data
            dispatch({ type: "get_images", data })
        })
        .catch(error => {
            console.log("error", error)

        })
        .finally(() => {
            dispatch({ type: "set_or_remuve_spinner", isOpenSpinner: false })
        })

}

export const getImagesFromSearch = (category, data) => (dispatch) => {
    dispatch({ type: "set_or_remuve_spinner", isOpenSpinner: true })
    axios.get(`${process.env.REACT_APP_UNSPLASH_SEARCH_URL}`, {
        params: {
            query: category
        },
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLUSH_KEY}`
        }

    })
        .then((response) => {
            if (response.error)
                throw response.error;
            data = response.data.results
            dispatch({ type: "get_images", data })
        })
        .catch(error => {
            console.log("error", error)

        })
        .finally(() => {
            dispatch({ type: "set_or_remuve_spinner", isOpenSpinner: false })
        })
}