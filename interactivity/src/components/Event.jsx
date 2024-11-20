// import react from 'react'
export default function Event({onPlayMusic,uploadImage}) {
  return (
    <>
    <div>
      <button onClick={onPlayMusic}>Music play</button>
      <button onClick={uploadImage}>Upload Image</button>
      </div>
    </>
  )
}
