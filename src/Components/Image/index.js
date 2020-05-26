import React from 'react';

const cache = {};



class Image extends React.PureComponent{

    constructor(props){
        super(props);
        this.state={
         isLoaded: false,
          url: null
        }
        this.imageRef = React.createRef();

    }

    componentDidMount(){
        if(cache[this.props.src]){
            this.setState({
                url:cache[this.props.src]
            })
        }else{
            this.downloadImage();
        }

    }



    componentDidUpdate(prevProps){
        if(prevProps.src !== this.props.src){
         this.downloadImage();
        }
    }


    downloadImage = async () => {
        let blob = await fetch(this.props.src).then(r => r.blob());
        let dataUrl = await new Promise(resolve => {
          let reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
    
        this.setState({
            url:dataUrl
        })
    
        cache[this.props.src] = dataUrl;

    }

 
    onImageLoad = async () => {

    //  ======= 1st method using File Reader=======


      this.downloadImage();


    //  ======= 2nd method using canvas=======

        // const canvas = document.createElement("canvas");
        // // canvas.width = this.imageRef.current.width;
        // // canvas.height = this.imageRef.current.height;
        // const context = canvas.getContext('2d');

        // console.log("====dimension====",this.imageRef.current.width,this.imageRef.current.height)
        // var img = document.createElement("img");
        // img.setAttribute('crossorigin', 'anonymous'); // works for me
        // img.onload = () => {
        //     context.drawImage(img,100, 100);
        //     const url = canvas.toDataURL();
        //     this.setState({
        //         url
        //     })

        //     cache[this.props.src] = url;

        // };
        // img.src = this.props.src;


    }


    render(){
        const {src, ...otherProps} = this.props;
       const {url} =  this.state;

        return <img {...otherProps} ref={this.imageRef}  src={url || src} />
    }
}
export default Image;