import styles from './imageList.module.css';
import notFound from '../../components/assets/images/404.jpg';

const ImageList = (props) => {
    const imgs = props.images.map((img) => {

        return (
            <div key={img.id} className={styles.gallery_item}>

                <img
                    className={styles.content}
                    src={img.urls.regular}
                    alt={img.alt_description}
                />
            </div>

        )
    })
    return (
        <div className={styles.gallery} id="gallery">

            {imgs.length ? imgs :
                <div
                    style={{
                        width: '1325px',
                        height: '250px',
                        textAlign: 'center'
                    }}
                >
                    <img
                        src={notFound}
                        alt="notFound"
                    />
                </div>}




        </div>
    )
}



export default ImageList