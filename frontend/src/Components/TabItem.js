import { styled } from "styled-components"

export const TabItem = ({title,index,active,setActive})=> {
    const className = active?'border-b-yellow-400':'border-none text-slate-400';
    return(
        <TabItemStyled>
            {/* <a href={`{#{title}}`}> */}
                <button onClick={()=>setActive(title)} className="btn">
                    <span className={`title  ${(active !==true) ?'active':''}`}>
                        {title.toUpperCase()}
                    </span>
                </button>
            {/* </a> */}
        </TabItemStyled>
    )
}

const TabItemStyled = styled.div`
color:black;
padding:10px 2px;
.btn{
    padding:10px 10px;
    border:none;
    outline:none;
    .title{
        &:hover{
            color:#37332B;
            border:none;
            box-shadow:none;
        }
    }
    .active{
        background:#CD9018;
        color:white;
        border:1px solid transparent;
        padding:20px;
        border-radius:20px;
    }
  
}
`;