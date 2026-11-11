import Link from 'next/link';

// หน้าแรก: แบ่ง 2 ฝั่ง — ซ้ายอธิบายขั้นตอนการทำงาน ขวาเลือกทางเข้า
const steps = [
  { icon: '📸', title: 'สาขาแจ้งของใกล้หมด', text: 'ถ่ายรูปและระบุจำนวนที่ต้องการสั่ง' },
  { icon: '🧾', title: 'สำนักงานใหญ่ตัดบิล', text: 'ตรวจรายการ จัดเป็นบิล และแพ็คของ' },
  { icon: '🚚', title: 'จัดส่งและยืนยันรับ', text: 'สาขาตรวจของที่ได้รับและยืนยันบิล' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto grid min-h-screen max-w-6xl lg:grid-cols-[1.1fr_0.9fr]">
        {/* ฝั่งซ้าย: ขั้นตอนการทำงาน */}
        <section className="relative flex flex-col justify-center overflow-hidden bg-linear-to-br from-indigo-600 via-indigo-600 to-sky-600 px-6 py-14 text-white sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-sky-300/20 blur-2xl" />

          <span className="relative inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-bold ring-1 ring-white/25">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            เว็บตัวอย่าง
          </span>
          <h1 className="relative mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl">ระบบแจ้งสินค้า<br />ใกล้หมด</h1>
          <p className="relative mt-4 max-w-md text-sm font-semibold leading-relaxed text-indigo-100">
            จากสาขาถึงสำนักงานใหญ่ ทุกบิลติดตามได้ตั้งแต่แจ้งจนรับของ
          </p>

          <ol className="relative mt-10 space-y-5">
            {steps.map((step, index) => (
              <li key={step.title} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl ring-1 ring-white/20">{step.icon}</span>
                <span>
                  <span className="block text-xs font-bold text-indigo-200">ขั้นที่ {index + 1}</span>
                  <span className="block text-base font-black">{step.title}</span>
                  <span className="block text-sm font-semibold text-indigo-100">{step.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* ฝั่งขวา: เลือกทางเข้า */}
        <section className="flex flex-col justify-center bg-white px-6 py-14 sm:px-12 lg:py-20">
          <h2 className="text-xl font-black">เลือกการใช้งาน</h2>
          <p className="mt-1.5 text-sm font-semibold text-slate-500">เลือกกลุ่มผู้ใช้ของคุณเพื่อเริ่มต้น</p>

          <div className="mt-8 space-y-4">
            <Link
              href="/stock-request"
              className="group flex items-center gap-4 rounded-2xl border-2 border-indigo-500 bg-indigo-500 p-5 text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-600 active:scale-[0.99]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-2xl">🏪</span>
              <span className="flex-1">
                <span className="block text-base font-black">พนักงานสาขา</span>
                <span className="block text-xs font-semibold text-indigo-100">เลือกสาขาแล้วใช้งานได้ทันที</span>
              </span>
              <span className="text-xl font-black transition-transform group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href="/admin"
              className="group flex items-center gap-4 rounded-2xl border-2 border-slate-200 bg-white p-5 text-slate-800 transition-all hover:border-indigo-400 hover:shadow-md active:scale-[0.99]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-2xl">🏢</span>
              <span className="flex-1">
                <span className="block text-base font-black">สำนักงานใหญ่</span>
                <span className="block text-xs font-semibold text-slate-500">ต้องเข้าสู่ระบบด้วยอีเมลและรหัสผ่าน</span>
              </span>
              <span className="text-xl font-black text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-indigo-500">→</span>
            </Link>
          </div>

          <p className="mt-10 text-xs font-semibold text-slate-400">ระบบนี้ใช้สำหรับการสาธิตเท่านั้น</p>
        </section>
      </div>
    </main>
  );
}
