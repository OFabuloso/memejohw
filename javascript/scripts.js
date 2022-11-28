function enablePhotoUpload(){
  const imageInput = document.querySelector("#image-input")

  imageInput.addEventListener("change", function(){
    const reader = new FileReader()

    reader.addEventListener("load", ()=>{
      const uploadImage = reader.result

      changeMemePicture(uploadImage)
      
      // document.querySelector("#display-image").style
      // .backgroundImage = `url(${uploadImage})`

    })

    reader.readAsDataURL(this.files[0])

  })

}

async function mapImageList(){
  const memesObject = [
    {
      "name": "chapolin",
      "path": "pictures/chapolin.jpg"
    },
    {
      "name": "chloe",
      "path": "pictures/chloe.jpg"
    },
    {
      "name": "bravo cat",
      "path": "pictures/funny-cat1.png"
    },
    {
      "name": "suspeito cat",
      "path": "pictures/funny-cat2.png"
    },

    {
      "name": "bahia do flamengo",
      "path": "pictures/bahia-flamenguista.jpg"
    },
    {
      "name": "bahia ganhando na blaze",
      "path": "pictures/bahia-ganhando-blaze.jpg"
    },
    {
      "name": "bahia loss blaze",
      "path": "pictures/bahia-loss-blaze.jpg"
    },
    {
      "name": "bahia e seu feedback",
      "path": "pictures/bahia-palestra-blaze.png"
    },
    {
      "name": "bahia pokerface",
      "path": "pictures/bahia-pokerface.webp"
    },
    {
      "name": "bahia de boa",
      "path": "pictures/bahia.jpg"
    },
    {
      "name": "bahia sem barba",
      "path": "pictures/bahia-sem-barba.jpg"
    },
    {
      "name": "caçapa",
      "path": "pictures/chack-malf.jpg"
    },
    {
      "name": "risada de boteco",
      "path": "pictures/smile-man.png"
    },
    {
      "name": "bahia carioca",
      "path": "pictures/bahia-do-crime.webp"
    },
  ]

  return memesObject

}

async function createGallery(imageList){
  const memeSelector = document.querySelector("#memes-list")

  imageList.forEach(picture => {
      let newOption = document.createElement("option")
      newOption.text = picture.name.toUpperCase()
      newOption.value = picture.path
      memeSelector.appendChild(newOption)
  });
}


async function changeMemePicture(photo) {
  let displayImage = document.querySelector("#display-image")
  displayImage.style.backgroundImage = `url('${photo}')`
}


async function main(){
  const memesImageList = await mapImageList()
  
  enablePhotoUpload()
  await createGallery(memesImageList)
  await changeMemePicture(memesImageList[1].path)
  
}

main()