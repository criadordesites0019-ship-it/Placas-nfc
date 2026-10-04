"use client";
import { useMemo, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function Home() {
  const [name,setName]=useState("Seu negócio");
  const [phrase,setPhrase]=useState("Sua avaliação faz a diferença!");
  const [link,setLink]=useState("https://g.page/r/exemplo/review");
  const [logo,setLogo]=useState("");
  const [accent,setAccent]=useState("#111111");
  const [quantity,setQuantity]=useState(1);
  const price=39.9;
  const total=(price*quantity).toFixed(2).replace(".",",");
  const qrValue=useMemo(()=>link.trim()||"https://g.page/r/exemplo/review",[link]);
  function upload(e:React.ChangeEvent<HTMLInputElement>){const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>setLogo(String(r.result));r.readAsDataURL(f)}
  return <main>
    <header className="nav"><div className="brand"><span className="brand-dot"/>PLACAS<span>NFC</span></div><nav><a href="#como">Como funciona</a><a href="#beneficios">Benefícios</a><a className="nav-cta" href="#personalizar">Personalizar</a></nav></header>
    <section className="hero"><div className="hero-copy"><div className="eyebrow">NFC + QR CODE • GOOGLE</div><h1>Transforme cada cliente em uma <em>nova avaliação.</em></h1><p>Uma plaquinha de acrílico elegante, personalizada para o seu negócio e pronta para facilitar avaliações no Google.</p><a className="primary" href="#personalizar">Criar minha placa <span>→</span></a><div className="trust"><span>★★★★★</span><b>Feita para gerar mais avaliações</b></div></div><div className="hero-card"><div className="mini-shine"/><div className="hero-logo">NFC</div><div className="hero-title">Peça avaliações.<br/><strong>Ganhe confiança.</strong></div><div className="hero-qr"><QRCodeSVG value={qrValue} size={90} bgColor="transparent"/></div></div></section>
    <section id="beneficios" className="benefits"><div><small>01</small><h3>Personalizada</h3><p>Nome, logo e mensagem da sua empresa na frente.</p></div><div><small>02</small><h3>Dois caminhos</h3><p>Cliente aponta a câmera no QR ou encosta o celular no NFC.</p></div><div><small>03</small><h3>Pronta para usar</h3><p>O NFC vai instalado no verso da placa.</p></div></section>
    <section id="personalizar" className="customizer"><div className="section-head"><div><div className="eyebrow">SEU PRODUTO</div><h2>Personalize sua placa</h2></div><p>Veja o resultado em tempo real. O formato da placa é fixo; você personaliza o conteúdo da frente.</p></div>
      <div className="builder"><div className="preview-wrap"><div className="plaque"><div className="plaque-glow"/><div className="plaque-content" style={{color:accent}}>{logo?<img src={logo} className="logo-img"/>:<div className="logo-placeholder">SEU LOGO</div>}<div className="plaque-name">{name||"Seu negócio"}</div><div className="stars">★★★★★</div><div className="plaque-phrase">{phrase||"Sua avaliação faz a diferença!"}</div><div className="qr-box"><QRCodeSVG value={qrValue} size={104}/></div><div className="google">Google <b>avaliações</b></div></div></div><div className="back-note">NFC instalado no verso • pronto para aproximar e avaliar</div></div>
      <div className="controls"><label>Nome da empresa<input value={name} onChange={e=>setName(e.target.value)} placeholder="Ex.: Café da Praça"/></label><label>Logo <span>(opcional)</span><input type="file" accept="image/*" onChange={upload}/></label><label>Frase<input value={phrase} onChange={e=>setPhrase(e.target.value)} placeholder="Sua avaliação faz a diferença!"/></label><label>Link de avaliação do Google<input value={link} onChange={e=>setLink(e.target.value)} placeholder="Cole aqui o link da sua avaliação"/></label><div className="row"><label>Cor do conteúdo<div className="color-row"><input type="color" value={accent} onChange={e=>setAccent(e.target.value)}/><code>{accent}</code></div></label><label>Quantidade<div className="qty"><button onClick={()=>setQuantity(Math.max(1,quantity-1))}>−</button><b>{quantity}</b><button onClick={()=>setQuantity(quantity+1)}>+</button></div></label></div><div className="buy"><div><small>A partir de</small><strong>R$ {total}</strong></div><button className="primary">Continuar pedido <span>→</span></button></div></div></div>
    </section>
    <section id="como" className="how"><div className="eyebrow">SIMPLES ASSIM</div><h2>Um toque para aproximar.<br/>Um clique para avaliar.</h2><div className="steps"><div><b>01</b><h3>Personalize</h3><p>Coloque sua identidade na placa.</p></div><div><b>02</b><h3>Receba</h3><p>NFC instalado e QR Code pronto.</p></div><div><b>03</b><h3>Compartilhe</h3><p>Deixe a placa no balcão e peça a avaliação.</p></div></div></section>
    <footer><div className="brand">PLACAS<span>NFC</span></div><p>Mais avaliações. Mais confiança.</p></footer>
  </main>
}