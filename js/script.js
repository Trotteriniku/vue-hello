const {createApp}= Vue;

createApp({
    data(){
        return {
            message: 'Ciao Stefano,Clelia eMarco ',
            text: 'potreste dirmi se i miei commit iniziali vanno bene ?',
            image : 'https://b1694534.smushcdn.com/1694534/wp-content/uploads/2021/06/11.5-1024x692.jpeg?lossy=1&strip=1&webp=1',
            imageSize : 'w-25 '
        }
    },
    methods:{
        imageSwap(){

            this.image = this.image === 'https://b1694534.smushcdn.com/1694534/wp-content/uploads/2021/06/11.5-1024x692.jpeg?lossy=1&strip=1&webp=1' ? 'https://res.cloudinary.com/practicaldev/image/fetch/s--h3BxZkAB--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://833250.smushcdn.com/1694534/wp-content/uploads/2021/06/display.jpeg%3Flossy%3D1%26strip%3D1%26webp%3D1' : 'https://b1694534.smushcdn.com/1694534/wp-content/uploads/2021/06/11.5-1024x692.jpeg?lossy=1&strip=1&webp=1'
             
        }

            
        }
    
    
}).mount('#app')