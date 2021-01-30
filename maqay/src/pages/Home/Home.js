import React from 'react';
import climateChange from '../../assets/img/climateChange.png';
import solidResidue from '../../assets/img/solidResidue.png';
import waterManagement from '../../assets/img/waterManagement.png';
import deforestation from '../../assets/img/deforestation.png';

const Home = () => {
    return (
        <div>
            <section class="container">
            <div class="transparency">
                <h1>
                    Conoce las propuestas de los candidatos
                </h1>
                <h2>ELECCIONES 2021</h2>

                <p>Ordena las propuestas</p>

                <button >Por tema ambiental</button>
                <button >Por partido político</button>
            </div>
            </section>
            <section class="cards-box">
            <div class="topic-cards">
                <div class="card"><img src={climateChange} alt="" /><div class="sub-card"><h1>Cambio climático</h1><p>Propuestas de:</p></div></div>
                <div class="card"><img src={solidResidue} alt=""/><div class="sub-card"><h1>Residuos sólidos</h1><p>Propuestas de:</p></div></div>
                <div class="card"><img src={waterManagement} alt="" /><div class="sub-card"><h1>Gestión de agua</h1><p>Propuestas de:</p></div></div>
                <div class="card"><img src="../../assets/img/deforestation.png" alt=""/><div class="sub-card"><h1>Deforestación</h1><p>Propuestas de:</p></div></div>
                <div class="card"><img src="../../assets/img/loggin-mining.png" alt=""/><div class="sub-card"><h1>Tala y minería ilegal</h1><p>Propuestas de:</p></div></div>
                <div class="card"><img src="../../assets/img/conflicts.png" alt=""/><div class="sub-card"><h1>Conflictos socioambientales</h1><p>Propuestas de:</p></div></div>
            </div>

            <div class="parties-cards" >
                <div class="card"><img src="../assets/images/partidoMorado.png" alt=""/></div>
                <div class="card"><img src="../assets/images/juntosPeru.png" alt=""/></div>
                <div class="card"><img src="../assets/images/fuerzaPopular.png" alt=""/></div>
                <div class="card"><img src="../assets/images/victoriaNacional.png" alt=""/></div>
                <div class="card"><img src="../assets/images/accionPopular.png" alt=""/></div>
                <div class="card"><img src="../assets/images/apra.png"alt="" /></div>
            </div>
        </section>
        </div>
    );
};

export default Home;