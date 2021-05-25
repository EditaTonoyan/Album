
import {useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import ImageList from '../../imageList/ImageList';




const Art = (props) => {

    useEffect(() => {
      axios.get('https://api.unsplash.com/search/photos', {
        params:{query:"art"},
        headers:{
          Authorization:'Client-ID tvGa6kfiHM-JIhGhaNgPwclpCPRBwceFEe7UR6MNS2Y'
        }
      
      })
      .then ((response) => {
        if(response.error)
        throw response.error;

        props.getImages(response.data.results)
        })
        .catch(error => {
            console.log("error", error)
        })

        
    }, [])

    const {image} = props

    
    return (
        <div>
            <ImageList images = {image}/>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        image:state.globalState.image
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      
        getImages:(data) => {
            dispatch({type:"get_images", data})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Art)