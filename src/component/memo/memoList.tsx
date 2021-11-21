// import React from "react";
// import styled from "@emotion/native";
// import {} from "react-native";

// function MemoList({item}){

//     return (
//         <MemoListWrapper >
//             <MemoListLeft>
//                 <MemoCreatedAt>
//                     {
//                         `${item.createdAt.slice(5,7)}` + "월" +
//                         `${item.createdAt.slice(8,10)}` + "일 " +
//                         `${item.createdAt.slice(11,13)}` + ":" +
//                         `${item.createdAt.slice(14,16)}` + ":" +
//                         `${item.createdAt.slice(17,19)}`
//                     }
//                 </MemoCreatedAt>
//                 <MemoContent>
//                     {item.memoContent}
//                     {/* {item.id} */}
//                 </MemoContent>
//             </MemoListLeft>
//             <TouchableOpacity
//                 onPressOut={deleteMemo}
//             >
//                 <MemoDeleteButton
//                     source={require("../../../public/images/List/delete.png")}
//                 />
//             </TouchableOpacity>
//         </MemoListWrapper>

//     )
// };

// export default MemoList;