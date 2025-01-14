//파라미터로 searchParams가 들어오며 
//타입을 지정하는데 타입은 Promise이고 반환값은 String q 이다.
export default async function Page({
    //함수형 컴포넌트에 async를 붙일 수 있는 이유: 리엑트의 서버 컴포넌트 이기 때문에 실행되기 이전 한번만 실행이 된다. 그렇기 때문에 비동기적으로 실행이 가능한 것이다. 
    searchParams,
}:{
    searchParams: Promise<{q:string}>;
}){
    const {q} = await searchParams;
    return <div>Search 페이지 : {q}</div>;
}
// http://localhost:3001/search?q=한입 -> Search 페이지 : 한입