
import {useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import ImageList from '../../imageList/ImageList';
import Spinner from '../../spinner/Spinner';


const Technology = (props) => {

    useEffect(() => {
        props.setOrRemoveSpinner(true)
      axios.get('https://api.unsplash.com/search/photos', {
        params:{query:"technology"},
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
        .finally(()=>
        props.setOrRemoveSpinner(false)
        )
        
    }, [])

    const {
        image,
        isOpenSpinner
    } = props

    return (
        <div >
            <ImageList images = {image}/>
            {isOpenSpinner && <Spinner/> }

        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        image:state.globalState.image,
        isOpenSpinner:state.globalState.isOpenSpinner
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      
        getImages:(data) => {
            dispatch({type:"get_images", data})
        },
        setOrRemoveSpinner:(isOpenSpinner) => {
            dispatch({type:"set_or_remuve_spinner", isOpenSpinner})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Technology)