import BSButton from '../common/BSButton';
import { collection, doc, writeBatch } from 'firebase/firestore';

import { store } from '../../remote/firebase';
import { card_list } from '../../mock/data';
import { COLLECTIONS } from '../../constants';

function CardListAddButton() {
  const handleButtonClick = async () => {
    try {
      // 배치 작업 생성
      const batch = writeBatch(store);

      // 카드 리스트를 반복하면서 배치에 추가
      card_list.forEach((card) => {
        const docRef = doc(collection(store, COLLECTIONS.CARD));
        batch.set(docRef, card);
      });

      // 배치 작업 커밋
      await batch.commit();

      console.log('Cards added successfully!');
      alert('카드 리스트 추가완료!');
    } catch (error) {
      console.error('Error adding cards: ', error);
      alert('카드 리스트 추가 중 오류가 발생했습니다.');
    }
  };

  return <BSButton onClick={handleButtonClick}>카드 리스트 추가하기</BSButton>;
}

export default CardListAddButton;
