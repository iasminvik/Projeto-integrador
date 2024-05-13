import React from 'react';
import './secaoLi.css';

const SecaoLi = ({li}) => {
    return (
        <div className="parte3">
            <div className='ajustetitulo'>
                 <h1>Quem sou?</h1>
            </div>
           
             <div className='ajusteimg'>
                <img src="./img/li.png" alt="imagemli" />
             </div>
            <div className='ajustep'>
                <p>Oiê, sou Elisângela Santos De Campos Drapela, boleira desde 2021 na Lih bolos artesanais.

                Meu trabalho através dos bolos é poder entregar lembranças afetivas afinal, bolo caseiro é carinho, cuidado e amor.

                Com receitas caseiras, onde coloco todo meu afeto em cada bolo preparado, sem nenhum tipo de conservante, pois é assim que nossas avós e mães preparavam cada bolo que faziam.

                Comecei a minha jornada assim pois a minha paixão sempre foi a culinária e me encontrei totalmente entregando tudo o que eu tenho de

                melhor, fazendo os bolos caseiros! No Lih bolos artesanais, quero criar experiências técnicas e transformar momentos simples em lembranças especiais.

                Afinal cada bolo é único e feito especialmente com muito carinho.

                Te convido a conhecer o sabor da minha jornada na Lih bolos artesanais!</p>
            </div>
   
        </div>  

    )
}
export default SecaoLi;