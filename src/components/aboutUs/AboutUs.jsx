import styles from './aboutUs.module.css';

const AboutUs = () => {
    return (
        <div className = {styles.body}>
        <div className = { styles.description}> 
            <h5 className={styles.h5}>
                Photo for everyone
            </h5>
                <p className={styles.p}>
                    Over 2 million free high-resolution images brought to you by the world’s most generous community of photographers.
                </p>
        </div>

        <div className={styles.div}>
            <img className = {styles.img} src="https://unsplash-assets.imgix.net/marketing/about-header.jpg" />
        </div>
        </div>
    )
}
export default AboutUs