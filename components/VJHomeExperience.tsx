'use client';

import { useState } from 'react';
import { buildPackagePrefill, buildVehiclePrefill } from '@/lib/enquiry';
import type { FleetVehicle, TourPackage } from '@/lib/vjtours-data';
import ContactSection from './ContactSection';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import PackagesSection from './PackagesSection';
import TestimonialsSection from './TestimonialsSection';
import VehiclesSection from './VehiclesSection';

export default function VJHomeExperience() {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
  const [selectedContextLabel, setSelectedContextLabel] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [prefillVersion, setPrefillVersion] = useState<number>(0);

  function scrollToEnquiry() {
    const target = document.getElementById('contact-us');
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleSelectPackage(pkg: TourPackage) {
    setSelectedVehicleId(null);
    setSelectedContextLabel(`${pkg.duration} · ${pkg.title}`);
    setMessage(buildPackagePrefill(pkg.duration, pkg.title, pkg.route));
    setPrefillVersion((v) => v + 1);
    scrollToEnquiry();
  }

  function handleSelectVehicle(vehicle: FleetVehicle) {
    setSelectedVehicleId(vehicle.id);
    setSelectedContextLabel(vehicle.name);
    setMessage(buildVehiclePrefill(vehicle.name, vehicle.passengers));
    setPrefillVersion((v) => v + 1);
    scrollToEnquiry();
  }

  function handleClearContext() {
    setSelectedVehicleId(null);
    setSelectedContextLabel(null);
    setMessage('');
  }

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#141A17]">
      <Navbar />
      <main>
        <HeroSection />
        <PackagesSection onSelectPackage={handleSelectPackage} />
        <VehiclesSection
          selectedVehicleId={selectedVehicleId}
          onSelectVehicle={handleSelectVehicle}
        />
        <TestimonialsSection />
        <ContactSection
          message={message}
          onMessageChange={setMessage}
          prefillVersion={prefillVersion}
          selectedContextLabel={selectedContextLabel}
          onClearContext={handleClearContext}
        />
      </main>
      <Footer />
    </div>
  );
}
