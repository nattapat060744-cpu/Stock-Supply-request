import Link from 'next/link';
import { Noto_Sans_Thai } from 'next/font/google';

// ฟอนต์ภาษาไทยเฉพาะหน้าแรก (ไม่กระทบหน้าอื่น)
const thaiFont = Noto_Sans_Thai({ subsets: ['thai', 'latin'], weight: ['400', '500', '600', '700', '800'] });

// หน้าแรก: ซ้ายอธิบายขั้นตอนการทำงาน ขวาเลือกทางเข้า (เนื้อหาและลิงก์เดิม ปรับเฉพาะหน้าตา)
const steps = [
  { icon: '📸', title: 'สาขาแจ้งของใกล้หมด', text: 'ถ่ายรูปและระบุจำนวนที่ต้องการสั่ง' },
  { icon: '🧾', title: 'สำนักงานใหญ่ตัดบิล', text: 'ตรวจรายการ จัดเป็นบิล และแพ็คของ' },
  { icon: '🚚', title: 'จัดส่งและยืนยันรับ', text: 'สาขาตรวจของที่ได้รับและยืนยันบิล' },
];

export default function Home() {
  return (
    <main className={`${thaiFont.className} min-h-screen bg-slate-50 text-slate-800`}>
      <div className="mx-auto grid min-h-screen max-w-6xl lg:grid-cols-[1.05fr_0.95fr]">
        {/* ฝั่งซ้าย: ขั้นตอนการทำงาน */}
        <section className="relative isolate flex flex-col justify-center overflow-hidden bg-linear-to-br from-indigo-600 via-indigo-600 to-sky-600 px-6 py-14 text-white sm:px-12 lg:rounded-r-[2.5rem] lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-28 -z-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-10 -z-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold ring-1 ring-white/25 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            เว็บตัวอย่าง
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl">
            ระบบแจ้งสินค้า
            <span className="block text-indigo-100">ใกล้หมด</span>
          </h1>
          <p className="mt-5 max-w-md text-base font-medium leading-relaxed text-indigo-100">
            จากสาขาถึงสำนักงานใหญ่ ทุกบิลติดตามได้ตั้งแต่แจ้งจนรับของ
          </p>

          <ol className="mt-12 space-y-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-sm"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-lg shadow-indigo-900/20">
                  {step.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-wider text-indigo-200">ขั้นที่ {index + 1}</span>
                  <span className="mt-0.5 block text-base font-extrabold">{step.title}</span>
                  <span className="mt-0.5 block text-sm font-medium text-indigo-100">{step.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* ฝั่งขวา: เลือกทางเข้า */}
        <section className="flex flex-col justify-center px-6 py-14 sm:px-12 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">ทางเข้าระบบ</p>
          <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">เลือกการใช้งาน</h2>
          <p className="mt-2 text-sm font-medium text-slate-500">เลือกกลุ่มผู้ใช้ของคุณเพื่อเริ่มต้น</p>

          <div className="mt-8 space-y-4">
            <Link
              href="/stock-request"
              className="group flex items-center gap-4 rounded-2xl bg-indigo-600 p-5 text-white shadow-xl shadow-indigo-600/25 ring-1 ring-indigo-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-600/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 active:translate-y-0"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-2xl ring-1 ring-white/25">🏪</span>
              <span className="min-w-0 flex-1">
                <span className="block text-lg font-extrabold">พนักงานสาขา</span>
                <span className="mt-0.5 block text-sm font-medium text-indigo-100">เลือกสาขาแล้วใช้งานได้ทันที</span>
              </span>
              <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg font-black transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href="/admin"
              className="group flex items-center gap-4 rounded-2xl bg-white p-5 text-slate-800 shadow-sm ring-1 ring-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:ring-indigo-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200 active:translate-y-0"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-2xl ring-1 ring-indigo-100">🏢</span>
              <span className="min-w-0 flex-1">
                <span className="block text-lg font-extrabold text-slate-900">สำนักงานใหญ่</span>
                <span className="mt-0.5 block text-sm font-medium text-slate-500">ต้องเข้าสู่ระบบด้วยอีเมลและรหัสผ่าน</span>
              </span>
              <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg font-black text-slate-400 transition-all duration-200 group-hover:translate-x-1 group-hover:bg-indigo-600 group-hover:text-white">→</span>
            </Link>
          </div>

          <p className="mt-10 flex items-center gap-2 text-xs font-medium text-slate-400">
            <span aria-hidden="true" className="h-px w-6 bg-slate-300" />
            ระบบนี้ใช้สำหรับการสาธิตเท่านั้น
          </p>
        </section>
      </div>
    </main>
  );
}
