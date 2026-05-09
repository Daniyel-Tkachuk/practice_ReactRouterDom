import {useParams} from "react-router-dom";
import {adidasArr} from "./PageOne";
import {S} from './_styles'

export const Model = () => {
  const {id} = useParams()

  const currentModel = adidasArr.find(el => String(el.id) === id)

  if (!currentModel) {
    return (
      <h3 style={{textAlign: 'center'}}>Модель не найдена</h3>
    )
  }

  const {model, price, picture, collection } = currentModel

  return (
    <S.CurrentModel>
      <h3>{model}</h3>
      <span>{price}</span>
      <img src={picture} alt={model}/>
      <span className={'collection'}>{collection}</span>
    </S.CurrentModel>
  );
};
