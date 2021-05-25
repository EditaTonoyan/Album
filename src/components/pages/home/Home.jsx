
import {useEffect} from 'react';
import axios from 'axios';
import Search from '../../Search';
import {connect} from 'react-redux';
import ImageList from '../../imageList/ImageList';


const Home = (props) => {
    const {image} = props;

    const userSubmit = (category) => {
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
    }

    useEffect(() => {
       axios.get("https://api.unsplash.com/photos/?client_id=tvGa6kfiHM-JIhGhaNgPwclpCPRBwceFEe7UR6MNS2Y"
                    
       )
       .then ((res) => {
        props.getImages(res.data)
       })
        
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)