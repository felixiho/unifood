import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {  Button  } from 'reactstrap';

const thumbsContainer = { 
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};
 
const clearButton ={
  marginTop: '20px'
}

const uploadImage ={
  padding: '4px 19px',
  marginRight: '10px',
  width:  '100%',
}

const clearImage ={
  padding: '4px 19px',
  marginRight: '10px', 
}

const parentSection ={
  padding: '0'
}



function Upload(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}> 
        <img
          src={file.preview}
          style={img}
          alt ="descriptionImages"
        />
      </div>
    </div>
  ));

  const handleClearImages = (e) => {
    e.preventDefault(); 
    setFiles([]);
  }

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section style={parentSection} className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} /> 
        
        <Button style={uploadImage}> Upload Images </Button>
      </div>
      <div style={thumbsContainer}>
        {thumbs}
      </div>
      {
        (files.length > 0) && 
        <div style={clearButton}> 
          <Button style={clearImage} onClick={handleClearImages}>Clear Images </Button>
        </div>
      }
      
    </section>
  );
}

export default Upload;