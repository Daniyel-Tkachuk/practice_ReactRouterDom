import {S} from './_styles'
import {useParams} from "react-router-dom";
import {adidasArr, AdidasItem} from "./PageOne";
import {pumaArr, PumaItem} from "./PageTwo";

type CurrentBrand = Record<string, AdidasItem[] | PumaItem[]>

const currentBrand: CurrentBrand = {
  adidas: adidasArr,
  puma: pumaArr,
}

export const Model = () => {
  const {id, brand} = useParams()

  const currentModel = brand
    ? currentBrand[brand].find(el => el.id === id)
    : null

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
