import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ShieldCheck, Pill, Package, Thermometer, Layers, 
  ArrowRight, FileText, CheckCircle2, ShieldAlert,
  CheckCircle, Sparkles, Activity, AlertTriangle,
  BookOpen, ExternalLink, Stethoscope, Info
} from 'lucide-react';
import { products } from '@/data/products';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/common/Button';
import { ProductCard } from '@/components/common/ProductCard';
import { ContactForm } from '@/components/common/ContactForm';
import { ProductImageGallery } from '@/components/products/ProductImageGallery';
import { FormattedProductName } from '@/components/common/FormattedProductName';

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: 'Product Not Found | Opsus Pharmaceuticals' };

  const title = `${product.name} (${product.genericName}) | Opsus Pharmaceuticals`;
  const description = `Verified pharmaceutical information for ${product.name}: ${product.composition}. Dosage Form: ${product.dosageForm}. Pack Size: ${product.packSize || product.packaging}. Manufactured under WHO-GMP certified standards.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: `${product.name} - ${product.genericName}`,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const galleryImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  // Structured Data Schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: `https://opsuspharma.com${product.image}`,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'Opsus Pharmaceuticals',
    },
    category: product.category,
    activeIngredient: product.activeIngredients?.map((ing) => `${ing.name} ${ing.strength}`).join(', ') || product.composition,
    manufacturer: {
      '@type': 'Organization',
      name: 'Opsus Pharmaceuticals (WHO-GMP Certified Partner Facilities)',
    },
  };

  return (
    <div className="flex flex-col w-full bg-[#FAF8F3]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Breadcrumb & Title Bar */}
      <div className="bg-white border-b border-[#E4E0D8] py-3.5 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/products' },
              { label: product.category, href: `/products?category=${product.categorySlug}` },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      {/* Main Product Presentation */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Header */}
          <div className="lg:hidden mb-6">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white border border-[#E4E0D8] text-[#2F6FA8]">
                {product.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#C9A15E]/15 text-[#0A1B33] flex items-center gap-1">
                <Pill className="w-2.5 h-2.5 text-[#C9A15E]" />
                {product.dosageForm}
              </span>
              {product.prescriptionRequired ? (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-700 border border-red-200 flex items-center gap-1">
                  <ShieldAlert className="w-2.5 h-2.5 text-red-600" />
                  {product.rxSchedule || 'Rx Prescription Only'}
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle className="w-2.5 h-2.5" />
                  Dietary / Health Supplement
                </span>
              )}
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1B33] tracking-tight">
              <FormattedProductName name={product.name} />
            </h1>
            <p className="font-mono text-xs sm:text-sm text-[#2F6FA8] font-semibold mt-1">
              {product.composition}
            </p>
            <p className="text-xs text-[#5B6B7D] mt-0.5">
              Generic: <strong>{product.genericName}</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Visual Column: Packaging & Image Gallery (5 cols) */}
            <div className="lg:col-span-5 static lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#E4E0D8] shadow-sm">
                <ProductImageGallery
                  productName={product.name}
                  genericName={product.genericName}
                  images={galleryImages}
                  partnerCertified={product.partnerCertified}
                />

                {/* Quick Attributes Badge Grid */}
                <div className="grid grid-cols-2 gap-2 my-4 pt-4 border-t border-[#E4E0D8]">
                  <div className="bg-[#FAF8F3] p-2.5 rounded-xl border border-[#E4E0D8]/70 text-left">
                    <span className="text-[10px] uppercase font-semibold text-[#5B6B7D] block">Dosage Form</span>
                    <span className="font-bold text-xs text-[#0A1B33]">{product.dosageForm}</span>
                  </div>
                  <div className="bg-[#FAF8F3] p-2.5 rounded-xl border border-[#E4E0D8]/70 text-left">
                    <span className="text-[10px] uppercase font-semibold text-[#5B6B7D] block">Route</span>
                    <span className="font-bold text-xs text-[#0A1B33]">{product.route || 'Oral'}</span>
                  </div>
                  <div className="bg-[#FAF8F3] p-2.5 rounded-xl border border-[#E4E0D8]/70 text-left">
                    <span className="text-[10px] uppercase font-semibold text-[#5B6B7D] block">Pack Size</span>
                    <span className="font-bold text-xs text-[#0A1B33]">{product.packSize || product.packaging}</span>
                  </div>
                  <div className="bg-[#FAF8F3] p-2.5 rounded-xl border border-[#E4E0D8]/70 text-left">
                    <span className="text-[10px] uppercase font-semibold text-[#5B6B7D] block">Rx Status</span>
                    <span className="font-bold text-xs text-[#0A1B33]">
                      {product.prescriptionRequired ? (product.rxSchedule || 'Schedule H') : 'Non-Rx'}
                    </span>
                  </div>
                </div>

                {/* Sourcing Transparency Box */}
                <div className="p-3.5 rounded-xl bg-[#FAF8F3] border border-[#E4E0D8] text-xs text-[#5B6B7D] space-y-1">
                  <div className="font-semibold text-[#0A1B33] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2F6FA8]" />
                    <span>WHO-GMP Sourcing Assurance</span>
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    Formulated under strict cGMP protocols at WHO-GMP certified partner facilities. Certified with full Certificate of Analysis (CoA) batch testing.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 pt-4 border-t border-[#E4E0D8] flex flex-col gap-2.5">
                  <Button
                    href={`/contact?interest=Product+Enquiry&product=${encodeURIComponent(product.name)}`}
                    variant="primary"
                    size="md"
                    showArrow
                    className="w-full justify-center text-xs sm:text-sm py-2.5"
                  >
                    Enquire for Commercial Supply
                  </Button>
                  <Button
                    href="/pcd-franchise"
                    variant="secondary"
                    size="md"
                    className="w-full justify-center text-xs sm:text-sm py-2.5"
                  >
                    Apply for PCD Territory Monopoly
                  </Button>
                </div>
              </div>
            </div>

            {/* Content Column: Specifications & Medical Data (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Desktop Header */}
              <div className="hidden lg:block bg-white rounded-2xl p-6 sm:p-8 border border-[#E4E0D8] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF8F3] border border-[#E4E0D8] text-[#2F6FA8]">
                    {product.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#C9A15E]/15 text-[#0A1B33] flex items-center gap-1">
                    <Pill className="w-3.5 h-3.5 text-[#C9A15E]" />
                    {product.dosageForm}
                  </span>
                  {product.prescriptionRequired ? (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200 flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3 text-red-600" />
                      {product.rxSchedule || 'Rx Prescription Only'}
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Dietary / Health Supplement
                    </span>
                  )}
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1B33] tracking-tight">
                  <FormattedProductName name={product.name} />
                </h1>
                <p className="font-mono text-base text-[#2F6FA8] font-semibold mt-1">
                  {product.composition}
                </p>
                <p className="text-xs text-[#5B6B7D] mt-1">
                  Generic Designation: <strong>{product.genericName}</strong>
                </p>
              </div>

              {/* Composition Breakdown Table */}
              <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E4E0D8] shadow-sm">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1B33] mb-3 flex items-center gap-2">
                  <Pill className="w-4 h-4 sm:w-5 sm:h-5 text-[#2F6FA8]" />
                  Verified Active Ingredients & Strength
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border border-[#E4E0D8] rounded-lg overflow-hidden">
                    <thead className="bg-[#FAF8F3] text-[#0A1B33] font-bold border-b border-[#E4E0D8]">
                      <tr>
                        <th className="py-2.5 px-3 sm:px-4">Active Ingredient</th>
                        <th className="py-2.5 px-3 sm:px-4">Exact Strength</th>
                        <th className="py-2.5 px-3 sm:px-4">Standard</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E4E0D8]">
                      {product.activeIngredients && product.activeIngredients.length > 0 ? (
                        product.activeIngredients.map((ing, i) => (
                          <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-2.5 px-3 sm:px-4 font-semibold text-[#0A1B33]">{ing.name}</td>
                            <td className="py-2.5 px-3 sm:px-4 font-mono font-medium text-[#2F6FA8]">{ing.strength}</td>
                            <td className="py-2.5 px-3 sm:px-4 text-[#5B6B7D]">IP / Ph.Eur / Standardized</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td className="py-2.5 px-3 sm:px-4 font-semibold text-[#0A1B33]">{product.composition}</td>
                          <td className="py-2.5 px-3 sm:px-4 font-mono font-medium text-[#2F6FA8]">As per formula</td>
                          <td className="py-2.5 px-3 sm:px-4 text-[#5B6B7D]">IP</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Product Description */}
              <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E4E0D8] shadow-sm">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1B33] mb-2.5 flex items-center gap-2">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#2F6FA8]" />
                  Product Overview
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B7D] leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* How It Works / Pharmacological Mechanism */}
              {product.howItWorks && (
                <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E4E0D8] shadow-sm">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1B33] mb-2.5 flex items-center gap-2">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A15E]" />
                    Mechanism of Action (How It Works)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6B7D] leading-relaxed">
                    {product.howItWorks}
                  </p>
                </div>
              )}

              {/* Clinical Indications & Uses */}
              <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E4E0D8] shadow-sm">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1B33] mb-3 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-[#2F6FA8]" />
                  Therapeutic Indications & Uses
                </h3>
                {product.uses && product.uses.length > 0 ? (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {product.uses.map((use, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#0A1B33] bg-[#FAF8F3] p-2.5 rounded-lg border border-[#E4E0D8]/60">
                        <CheckCircle className="w-4 h-4 text-[#2F6FA8] shrink-0 mt-0.5" />
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm text-[#5B6B7D] leading-relaxed mb-4">
                    {product.therapeuticUse}
                  </p>
                )}

                {/* Dosage & Directions Disclaimer */}
                <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-amber-700" />
                    <span>Dosage & Direction Guidelines</span>
                  </div>
                  <p className="leading-relaxed">
                    {product.dosageInformation || 'Dosage should be strictly determined by a qualified healthcare professional based on individual clinical evaluation. Use medicines only as directed by a registered medical practitioner.'}
                  </p>
                </div>
              </div>

              {/* Precautions & Side Effects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Precautions */}
                {product.precautions && product.precautions.length > 0 && (
                  <div className="bg-white rounded-2xl p-5 border border-[#E4E0D8] shadow-sm">
                    <h4 className="font-serif text-base font-bold text-[#0A1B33] mb-2.5 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      Precautions & Warnings
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#5B6B7D]">
                      {product.precautions.map((p, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#C9A15E] font-bold">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Common Side Effects */}
                {product.sideEffects && product.sideEffects.length > 0 && (
                  <div className="bg-white rounded-2xl p-5 border border-[#E4E0D8] shadow-sm">
                    <h4 className="font-serif text-base font-bold text-[#0A1B33] mb-2.5 flex items-center gap-2">
                      <Info className="w-4 h-4 text-[#2F6FA8]" />
                      Documented Adverse Effects
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#5B6B7D]">
                      {product.sideEffects.map((se, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#2F6FA8] font-bold">•</span>
                          <span>{se}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Storage & Supply Specifications Table */}
              <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E4E0D8] shadow-sm">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1B33] mb-3">
                  Packaging, Storage & Manufacturing Specifications
                </h3>
                <div className="divide-y divide-[#E4E0D8] text-xs sm:text-sm">
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-[#5B6B7D]">Packaging Presentation:</span>
                    <span className="font-semibold text-[#0A1B33] text-right">{product.packaging}</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-[#5B6B7D]">Pack Size:</span>
                    <span className="font-semibold text-[#0A1B33] text-right">{product.packSize || product.packaging}</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-[#5B6B7D]">How Supplied:</span>
                    <span className="font-medium text-[#0A1B33] text-right max-w-sm">{product.howSupplied}</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-[#5B6B7D]">Storage Requirements:</span>
                    <span className="font-medium text-[#0A1B33] text-right max-w-sm">{product.storage}</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-[#5B6B7D]">Manufacturing Source:</span>
                    <span className="font-semibold text-[#2F6FA8] text-right">WHO-GMP Certified Partner Facility</span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-[#5B6B7D]">Marketed & Distributed By:</span>
                    <span className="font-semibold text-[#0A1B33] text-right">Opsus Pharmaceuticals</span>
                  </div>
                </div>
              </div>

              {/* Research Sources & Medical References */}
              {product.researchSources && product.researchSources.length > 0 && (
                <div className="bg-[#FAF8F3] rounded-2xl p-5 border border-[#E4E0D8] text-xs text-[#5B6B7D]">
                  <div className="flex items-center gap-2 mb-2 font-bold text-[#0A1B33]">
                    <BookOpen className="w-4 h-4 text-[#2F6FA8]" />
                    <span>Product Information Sources & Compendial References</span>
                  </div>
                  <p className="mb-2 text-[11px]">
                    Pharmaceutical information compiled in accordance with standard pharmacopoeial monographs and authoritative medical reference databases:
                  </p>
                  <ul className="space-y-1">
                    {product.researchSources.map((source, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-[11px] text-[#0A1B33]">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{source.title}</span>
                        <span className="text-[#5B6B7D]">({source.sourceType})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Mandatory Medical Safety Disclaimer */}
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-[11px] text-[#5B6B7D] leading-relaxed">
                <strong>Medical Disclaimer:</strong> Use medicines only as directed by a qualified healthcare professional. Product information is provided strictly for healthcare professional reference and educational purposes, and does not constitute medical advice or replace consultation with a physician.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Showcase - 3 boxes in single row */}
      {relatedProducts.length > 0 && (
        <section className="py-12 sm:py-16 bg-white border-t border-[#E4E0D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#2F6FA8]">
                  Same Therapeutic Area
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A1B33]">
                  Related {product.category} Formulations
                </h3>
              </div>
              <Link
                href={`/products?category=${product.categorySlug}`}
                className="text-xs font-semibold text-[#2F6FA8] hover:text-[#0A1B33] inline-flex items-center gap-1"
              >
                <span>View Full Category</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pre-filled Product Enquiry Form */}
      <section className="py-12 sm:py-16 bg-[#FAF8F3] border-t border-[#E4E0D8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            defaultInterest="Product Enquiry"
            defaultMessage={`Hello Opsus Team, I would like to enquire about commercial availability, minimum order batch quantity, and distribution terms for ${product.name} (${product.composition}).`}
          />
        </div>
      </section>
    </div>
  );
}
