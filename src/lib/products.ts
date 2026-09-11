import luna from "@/assets/luna.jpg";
import aurora from "@/assets/aurora.jpg";
import alice from "@/assets/alice.jpg";
import sofia from "@/assets/sofia.jpg";
import helena from "@/assets/helena.jpg";
import unboxing from "@/assets/unboxing.jpg";
import sobre from "@/assets/sobre.jpg";

export type Product = {
  slug: string;
  name: string;
  price: number;
  badge: string;
  tagline: string;
  gallery: string[];
  story: string[];
  includes: string[];
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "luna",
    name: "Luna",
    price: 99.9,
    badge: "Kit completo",
    tagline: "A primeira bebê, com tudo que ela precisa para chegar.",
    gallery: [luna, unboxing, sobre],
    story: [
      "Luna é o começo de tudo. Feita para quem sempre quis sentir esse peso doce nos braços e nunca soube por onde começar.",
      "Ela chega vestida, penteada e com o enxoval pronto — como se já morasse na sua casa há dias.",
    ],
    includes: [
      "Bebê Luna em vinil siliconado com pintura artesanal",
      "Conjunto de tricô blush e touquinha combinando",
      "Manta de algodão creme",
      "Chupeta magnética, mamadeira decorativa e prendedor",
      "Certificado de nascimento com o nome que você escolher",
    ],
    specs: [
      { label: "Tamanho", value: "48 cm" },
      { label: "Peso", value: "Aproximadamente 1,4 kg" },
      { label: "Corpo", value: "Tecido com enchimento de microesferas" },
      { label: "Cabelo", value: "Fio sintético penteado à mão" },
    ],
  },
  {
    slug: "aurora",
    name: "Aurora",
    price: 119.9,
    badge: "Dormindo",
    tagline: "Olhinhos fechados, respiração de quem sonha bonito.",
    gallery: [aurora, unboxing, sobre],
    story: [
      "Aurora dorme. Sempre. É a bebê de quem gosta de silêncio, de colo demorado e de fim de tarde.",
      "O rosto foi modelado no meio de um suspiro — e é impossível olhar para ela e não falar baixinho.",
    ],
    includes: [
      "Bebê Aurora com olhos fechados e cílios aplicados fio a fio",
      "Wrap de tricô rosa antigo",
      "Manta creme de algodão",
      "Chupeta magnética",
      "Cartão com o ritual de chegada",
    ],
    specs: [
      { label: "Tamanho", value: "50 cm" },
      { label: "Peso", value: "Aproximadamente 1,6 kg" },
      { label: "Olhos", value: "Fechados, expressão de sono profundo" },
      { label: "Pintura", value: "Camadas de veias e rubor em tinta atóxica" },
    ],
  },
  {
    slug: "alice",
    name: "Alice",
    price: 139.9,
    badge: "55 centímetros",
    tagline: "O tamanho de um bebê de verdade no colo.",
    gallery: [alice, unboxing, sobre],
    story: [
      "Alice é grande. Ocupa o berço, ocupa o carrinho, ocupa o colo inteiro — e é isso que faz o coração apertar.",
      "Quem recebe Alice quase sempre chora na primeira vez que a levanta. É o peso que engana bonito.",
    ],
    includes: [
      "Bebê Alice de 55 cm com pescoço articulado",
      "Macacão de renda marfim com laços blush",
      "Faixa de cabelo artesanal",
      "Chupeta magnética e coelhinho de pelúcia",
      "Certificado de nascimento personalizado",
    ],
    specs: [
      { label: "Tamanho", value: "55 cm" },
      { label: "Peso", value: "Aproximadamente 2,1 kg" },
      { label: "Articulação", value: "Cabeça, braços e pernas móveis" },
      { label: "Cabelo", value: "Implantado fio a fio" },
    ],
  },
  {
    slug: "sofia",
    name: "Sofia",
    price: 169.9,
    badge: "Gordinha",
    tagline: "Bochechas, dobrinhas e um sorriso que não pede licença.",
    gallery: [sofia, unboxing, sobre],
    story: [
      "Sofia tem dobrinha no braço, bochecha corada e aquele olhar de quem acabou de acordar de bom humor.",
      "É a bebê mais fotografada da Lumière. Ninguém resiste a apertar a perninha.",
    ],
    includes: [
      "Bebê Sofia com corpo gordinho e dobras modeladas",
      "Body de tricô creme com botões de madeira",
      "Faixa de cabelo delicada",
      "Chupeta magnética e mantinha",
      "Certificado de nascimento personalizado",
    ],
    specs: [
      { label: "Tamanho", value: "52 cm" },
      { label: "Peso", value: "Aproximadamente 2,3 kg" },
      { label: "Corpo", value: "Modelagem gordinha com dobrinhas" },
      { label: "Pintura", value: "Rubor intenso em bochechas, mãos e pés" },
    ],
  },
  {
    slug: "helena",
    name: "Helena",
    price: 199.9,
    badge: "Premium",
    tagline: "A peça de assinatura, feita para atravessar gerações.",
    gallery: [helena, unboxing, sobre],
    story: [
      "Helena é o nosso trabalho mais demorado. Cada camada de pintura descansa antes da próxima, e o cabelo leva dias para ficar pronto.",
      "Ela chega em caixa forrada com laço dourado, do jeito que se entrega uma coisa importante.",
    ],
    includes: [
      "Bebê Helena com acabamento premium e cabelo implantado fio a fio",
      "Vestido de cetim marfim com renda e laço dourado",
      "Sapatinhos e faixa de cabelo com flores",
      "Caixa-presente forrada com laço de cetim",
      "Certificado de autenticidade numerado e carta escrita à mão",
    ],
    specs: [
      { label: "Tamanho", value: "55 cm" },
      { label: "Peso", value: "Aproximadamente 2,4 kg" },
      { label: "Acabamento", value: "Premium, com unhas e lábios detalhados" },
      { label: "Embalagem", value: "Caixa-presente assinada Lumière" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const brl = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const pixPrice = (value: number) => value * 0.95;

export const installment = (value: number, times = 6) => value / times;

export const cuidados = [
  "Limpe com pano macio levemente umedecido, sem sabão abrasivo.",
  "Não lave o corpo em máquina e não deixe de molho.",
  "Guarde longe do sol direto para preservar a pintura.",
  "As roupinhas podem ser lavadas à mão com sabão neutro.",
  "Peça de colecionador com peças pequenas: não indicada para menores de 3 anos.",
];

export const trocas = [
  "Você tem 7 dias corridos após o recebimento para desistir da compra, conforme o Código de Defesa do Consumidor.",
  "Trocas por defeito de fabricação em até 30 dias, com frete por nossa conta.",
  "A bebê precisa voltar com a embalagem, o certificado e todos os acessórios.",
  "Fale com a gente pelo WhatsApp e resolvemos junto, sem formulário complicado.",
];

export { unboxing as unboxingImage, sobre as sobreImage };
