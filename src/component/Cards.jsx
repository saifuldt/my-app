import Card from "./Card"

const Cards = () => {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex justify-around">
        <Card imageSrc="https://m.media-amazon.com/images/I/71mskPWIY9L._AC_SL1500_.jpg" />
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5r-hCIIeAOMQZLlY_MLsPkV3uo0k1xcG_FA&s" />
        <Card  imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUCelGPWAYGb4vtkgVT0lTzkwd9szst0nTA&s" />
      </div>
      <div className="flex justify-around">
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHBKszaLt1PQdMEW0EgJYFxXm-w7AvbfCYQ&s" />
        <Card  imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKaWeeEla3OJkT998kesc_Xa7oRhb56AaSg&s" />
        <Card  imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KfF6PioiuwO7VZhazfNjCcgoE1ZBByJPPw&s" />
      </div>
      <div className="flex justify-around">
        <Card  imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVU_NUuct0Dknr1FWG7JZg6rMf1ja71Hs0Zg&s" />
        <Card  imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWf2FC6cpCjdXCUdCMXmlAGOQFpdqhPM_hA&s" />
        <Card   imageSrc="https://images-cdn.ubuy.co.id/65d181843c76643163161751-toddler-little-kids-shoes-boys-girls.jpg"/>
      </div>
    </div>
  )
}

export default Cards