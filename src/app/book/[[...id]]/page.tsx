export default async function Page({
    params,
}:{
    params:Promise<{id:String}>;
}){
    const {id} = await params;
    return <div> book/[id] page 입니다.{id}</div>
}