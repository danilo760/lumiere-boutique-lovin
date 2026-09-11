export type StoredOrder = {
  number: string;
  createdAt: string;
  name: string;
  email: string;
  city: string;
  state: string;
  cep: string;
  address: string;
  shipping: string;
  shippingPrice: number;
  discount: number;
  total: number;
  payment: "pix" | "cartao";
  installments: number;
  items: { name: string; qty: number; price: number }[];
};

const KEY = "lumiere-orders";

export function saveOrder(order: StoredOrder) {
  try {
    const raw = localStorage.getItem(KEY);
    const all: StoredOrder[] = raw ? JSON.parse(raw) : [];
    localStorage.setItem(KEY, JSON.stringify([order, ...all].slice(0, 20)));
  } catch {
    /* ignore */
  }
}

export function getOrder(number: string): StoredOrder | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const all: StoredOrder[] = JSON.parse(raw);
    return all.find((o) => o.number === number) ?? null;
  } catch {
    return null;
  }
}

export function newOrderNumber() {
  return `LR${Math.floor(100000 + Math.random() * 899999)}`;
}
