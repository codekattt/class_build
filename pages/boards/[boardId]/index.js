import { useRouter } from "next/router"

export default function BoardPage(){

    const router = useRouter()

    return (
    <>
        <div>안녕하세요 게시판 상세 동적 페이지입니다.</div>
        <div>게시글 아이디: {router.query.boardId}</div>
    </>
)
}