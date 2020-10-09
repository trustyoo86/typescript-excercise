/**
 * async 관련된 내용을 테스트 해보기 위한 ts
 * 컨셉은 다음과 같다
 *  - interface내에 유동적으로 T generic을 이용한 return할 data 지정
 *  - data에 포함된 내용을 따라 returnType 구성
 *  - returnType에 따른 ajax 이후 response 되는 내용을 확인
 *  - Todo
 *  -- 이렇게 하려면 이후 Array 형태의 async 처리시에는 어떻게 할까?
 *  -- 이렇게 하지 않고, 실제 받는 데이터에 대한 type casting이 가능할까?
 */

interface IFn<T> {
  url: string;
  data: T;
}

function fn<T>(props: IFn<T>): T {
  const { data } = props;
  return data;
}

interface IModels {
  imageUrl: string;
  width: number;
  height: number;
}

function init(): void {
  const opts: { url: string, data: IModels } = {
    url: 'http://test.app.com',
    data: {
      imageUrl: './page.jpg',
      width: 180,
      height: 180,
    },
  };
  const data = fn<IModels>(opts);
}

init();
