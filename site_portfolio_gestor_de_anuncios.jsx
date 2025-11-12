import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function AdsManagerLanding() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-gray-900 font-bold shadow-lg">MN</div>
          <div>
            <h1 className="text-lg font-semibold text-white">Manoel Neto • Gestor de Anúncios</h1>
            <p className="text-sm text-gray-400">Autoridade em Tráfego Pago e Estratégias de Lançamento</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#sobre" className="hover:text-yellow-400">Sobre</a>
          <a href="#servicos" className="hover:text-yellow-400">Serviços</a>
          <a href="#portifolio" className="hover:text-yellow-400">Portfólio</a>
          <a href="#contato" className="hover:text-yellow-400">Contato</a>
        </nav>
        <a href="#contato" className="hidden md:inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg shadow hover:opacity-90 text-sm font-medium">Fale Comigo</a>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm text-yellow-500 font-medium">Gestão de tráfego e campanhas</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white">Eu gero resultados reais e impactantes através de anúncios estratégicos</h2>
            <p className="mt-4 text-gray-400">Gestor de tráfego especializado em campanhas de alta performance. Estratégias personalizadas que elevam marcas, aumentam vendas e maximizam o ROI.</p>

            <div className="mt-6 flex gap-3">
              <a href="#contato" className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg shadow hover:opacity-90">Solicitar Auditoria</a>
              <a href="#portifolio" className="inline-flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-lg text-sm hover:border-yellow-500">Ver Resultados</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="p-4 bg-gray-800 rounded-lg shadow">
                <div className="font-semibold text-yellow-500">+45%</div>
                <div className="text-gray-400">Aumento médio de conversões</div>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow">
                <div className="font-semibold text-yellow-500">-32%</div>
                <div className="text-gray-400">Redução média do CPA</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-gray-800 to-gray-700 p-6">
              <div className="h-64 w-full bg-[url('https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center rounded-xl"></div>
              <div className="mt-4">
                <div className="font-semibold text-white">Case de Resultados Impactantes</div>
                <div className="text-sm text-gray-400">Gestão de anúncios estratégicos gerando crescimento e reconhecimento de marca.</div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="sobre" className="py-12">
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Sobre Manoel Neto</h3>
          <p className="text-gray-300 max-w-3xl">Sou <span className="text-white font-semibold">Manoel Neto</span>, especialista em tráfego pago e estratégias de lançamento. Minha missão é ajudar empresas e profissionais a alcançarem resultados extraordinários através da gestão inteligente de anúncios. Trabalho com foco em performance, escala e posicionamento de autoridade — porque vender mais é consequência de uma estratégia bem construída.</p>
        </section>

        <section id="servicos" className="py-12">
          <h3 className="text-lg font-semibold text-yellow-500">Serviços</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Gestão de Tráfego Pago','Estratégias de Lançamento','Alavancagem de Negócios'].map((s, idx) => (
              <motion.div key={s} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * idx }} className="bg-gray-800 p-6 rounded-2xl shadow">
                <div className="text-sm text-yellow-500 font-bold">0{idx+1}</div>
                <h4 className="mt-2 font-semibold text-white">{s}</h4>
                <p className="mt-2 text-sm text-gray-400">Planejamento, execução e otimização de campanhas para gerar crescimento e escala sustentável.</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="portifolio" className="py-12">
          <h3 className="text-lg font-semibold text-yellow-500">Resultados & Cases</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-gray-800 rounded-xl overflow-hidden shadow">
                <div className="h-40 bg-gray-700 flex items-center justify-center text-gray-500">Case {i}</div>
                <div className="p-4">
                  <div className="font-semibold text-white">Gestão de anúncios</div>
                  <div className="text-sm text-gray-400">Resultados impactantes e estratégias sob medida que ampliam vendas e reconhecimento de marca.</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="py-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-yellow-500">Entre em Contato</h3>
            <p className="text-gray-400 mt-2">Quer elevar seus resultados com tráfego pago estratégico? Envie uma mensagem e receba uma auditoria personalizada.</p>

            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="p-3 rounded-lg border border-gray-600 bg-gray-900 text-gray-100 placeholder-gray-500" placeholder="Nome" />
              <input className="p-3 rounded-lg border border-gray-600 bg-gray-900 text-gray-100 placeholder-gray-500" placeholder="E-mail" />
              <input className="p-3 rounded-lg border border-gray-600 bg-gray-900 text-gray-100 placeholder-gray-500 md:col-span-2" placeholder="Empresa / Produto" />
              <textarea className="p-3 rounded-lg border border-gray-600 bg-gray-900 text-gray-100 placeholder-gray-500 md:col-span-2" rows={4} placeholder="Objetivo curto (ex.: vender mais, captar leads)"></textarea>
              <button type="button" className="md:col-span-2 bg-yellow-500 text-gray-900 px-4 py-3 rounded-lg font-semibold hover:opacity-90">Enviar Pedido de Auditoria</button>
            </form>

            <div className="mt-6 text-sm text-gray-400">Ou envie um WhatsApp direto: <a href="https://wa.me/5582991103585" className="text-yellow-500 font-semibold">(82) 9 9110-3585</a></div>
          </div>
        </section>

        <footer className="mt-12 py-8 text-sm text-gray-500">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div>© {new Date().getFullYear()} Manoel Neto • Gestor de Anúncios. Todos os direitos reservados.</div>
            <div className="mt-4 md:mt-0"> <a href="#" className="mr-4 hover:text-yellow-500">Política de Privacidade</a> <a href="#" className="hover:text-yellow-500">Termos</a></div>
          </div>
        </footer>
      </main>

      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/5582991103585"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-yellow-500 text-gray-900 p-4 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
