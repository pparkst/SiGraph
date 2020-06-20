import React, { Component } from 'react';
import { FileManager, FileUploader } from 'reactjs-file-uploader'
import { defaultMaxListeners } from "events";

class VanillaExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
    this.uploadFiles = this.uploadFiles.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  render() {
    return (
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={event => this.setState({ files: this.state.files.concat(Array.from(event.target.files)) })}
          multiple
        />
        <FileManager key={this.state.files.key}
          files={this.state.files}
        >
          {this.uploadFiles}
        </FileManager>
      </div>
    )
  }

  uploadFiles(files) {
    console.log(files)
    return files.map(this.uploadFile);
  }

  uploadFile(file) {
    console.log(file)

    return (

      <span key={file.key}>{file.key}</span>
      // <FileUploader
      //     key={file.key}
      //     file={file}
      //     url='https://api.cloudinary.com/v1_1/dpdenton/upload'
      //     formData={{
      //         file,
      //         upload_preset: 'public',
      //         tags: 'vanilla',
      //     }}
      //     readFile
      // >
      //     {this.fileProgress}
      // </FileUploader>
    )
  }

  static fileProgress({

    /*
    References to the Event objects.
    Initial state is null and each propert gets assigned on Event.
     */
    uploadReady,
    uploadStart,
    uploadProgress,
    uploadComplete,
    downloadStart,
    downloadProgress,
    downloadComplete,
    error,
    abort,
    timeout,

    /*
    The sequential state of the request
    enum {
        uploadReady, uploadStart, uploadProgress, uploadComplete, downloadStart
        downloadStart, downloadProgress, downloadComplete
    }
     */
    requestState,

    /*
    Function references to start / abort request
      */
    startUpload,
    abortRequest,

    /*
    Request Object reference (XMLHttpReqeust)
     */
    request,

    /*
    Response text Object (JSON)
     */
    response,

    /*
    Data of the file being uploaded (if readData props is true)
     */
    fileData,

  }) {
    return (
      <div>
        {fileData && <img src={fileData} width={200} alt="Preview" />}
        {startUpload && <button onClick={startUpload}>Upload File</button>}
        {requestState && requestState}
      </div>
    )
  }

}


export default VanillaExample