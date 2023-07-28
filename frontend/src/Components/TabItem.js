import { styled } from "styled-components"

export const TabItem = ({title,index,active,setActive})=> {
    const className = active?'border-b-yellow-400':'border-none text-slate-400';
    return(
        <TabItemStyled>
            {/* <a href={`{#{title}}`}> */}
                <button onClick={()=>setActive(title)} className="btn">
                    <span className={`title ${className}`}>
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
        box-shadow: -1px -4px 15px 22px rgba(226,181,27,0.46) inset;
        -webkit-box-shadow: -1px -4px 15px 22px rgba(226,181,27,0.46) inset;
        -moz-box-shadow: -1px -4px 15px 22px rgba(226,181,27,0.46) inset;
        &:hover{
            color:#8B7547;
            border:none;
            box-shadow:none;
        }
    }
}
`;