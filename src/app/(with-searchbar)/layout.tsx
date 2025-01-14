//레이아웃으로 작동한다

import { ReactNode } from "react";

// /search 경로로 실행하는 모든 경로에적용된다
export default function Layout({
    children
}:{
    children:ReactNode;
}){
    return <div>
        <div>임시 서치 바</div>
        {children}
    </div>;

}