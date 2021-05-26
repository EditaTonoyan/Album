
import {useEffect} from 'react';
import axios from 'axios';
import Search from '../../Search';
import {connect} from 'react-redux';
import ImageList from '../../imageList/ImageList';
import Spinner from '../../../components/spinner/Spinner';


const Home = (props) => {
    const {
        image,
        isOpenSpinner,
    } = props;

    const userSubmit = (category) => {
        props.setOrRemoveSpinner(true)
        axios.get('https://api.unsplash.com/search/photos', {
        params:{query:category},
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
    }

    useEffect(() => {
        props.setOrRemoveSpinner(true)
       axios.get("https://api.unsplash.com/photos/?client_id=tvGa6kfiHM-JIhGhaNgPwclpCPRBwceFEe7UR6MNS2Y"
                    
       )
       .then ((res) => {
        if(res.error)
        throw res.error;         
        props.getImages(res.data)
       })
       .catch(error => {
        console.log("error", error)

    })
    .finally(()=>
    props.setOrRemoveSpinner(false)
    )
        
    }, [])
    
    return (
        <div> 

            <div style={{padding:'16px', textAlign:'center'}}>
        <Search 
            onSub = {userSubmit}
        />
        </div>

         <div>
         <ImageList images = {image}/>
        </div>

        {isOpenSpinner &&  <Spinner/>}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)