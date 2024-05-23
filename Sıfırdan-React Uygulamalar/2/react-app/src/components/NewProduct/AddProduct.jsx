import React from 'react'

const AddProduct = ({setIsOpen}) => {
  return (
    <div>
        <button onClick={()=>setIsOpen(true)}>Yeni Ürün Ekle</button>
    </div>
  )
}

export default AddProduct