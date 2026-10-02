// Permanent (308) redirects applied by src/middleware.ts.
// Keys and values are paths without a trailing slash. Every destination must
// be a live, self-canonical page: no chains.

// Legacy WordPress URLs that have a genuine equivalent on the current site.
// Anything without an equivalent is intentionally left to 404.
const LEGACY: Record<string, string> = {
  "/about": "/about-us",
  "/contacts": "/contact-us",
  "/what-we-do": "/solutions",
  "/service/indigenization": "/solutions/indegenization",
  "/service/test-rigs-test-chambers":
    "/products/aviation-equipment/ground-test-equipment",
  "/services/rig-chamber": "/products/aviation-equipment/ground-test-equipment",
  "/steel": "/products/airborne-raw-materials",
  "/service/aircraft-spares": "/products/aircraft-spares-system",
  "/service/raw-materials": "/products/airborne-raw-materials",
};

// Pages merged into a stronger page covering the same product or intent.
const CONSOLIDATED: Record<string, string> = {
  "/products/aviation-equipment/ground-supply-equipment/ground-power-unit/aircraft-ground-power-unit":
    "/products/aviation-equipment/ground-supply-equipment/ground-power-unit",
  "/products/aviation-equipment/ground-supply-equipment/ground-power-unit/aircraft-power-supply-system":
    "/products/aviation-equipment/ground-supply-equipment/ground-power-unit",
  "/products/aviation-equipment/ground-supply-equipment/ground-power-unit/diesel_ground_power_unit":
    "/products/aviation-equipment/ground-supply-equipment/ground-power-unit",
  "/products/aviation-equipment/ground-supply-equipment/ground-power-unit/fixed-electrical-ground-power":
    "/products/aviation-equipment/ground-supply-equipment/ground-power-unit",
  "/products/aviation-equipment/ground-supply-equipment/ground-power-unit/ground-power-unit-for-aircraft-maintenance":
    "/products/aviation-equipment/ground-supply-equipment/ground-power-unit",
  "/products/aviation-equipment/ground-test-equipment/air-data-test-system/air_data_test_equipment":
    "/products/aviation-equipment/ground-test-equipment/air-data-test-system",
  "/products/aviation-equipment/ground-test-equipment/air-data-test-system/aircraft_pitot_static_tester":
    "/products/aviation-equipment/ground-test-equipment/air-data-test-system/pitot_static_test_equipment",
  "/products/aviation-equipment/ground-test-equipment/air-data-test-system/pitot_static_calibration_system":
    "/products/aviation-equipment/ground-test-equipment/air-data-test-system/aircraft_air_data_calibration_system",
  "/products/aviation-equipment/ground-test-equipment/automated-pitot-leak-tester/air_data_test_equipment":
    "/products/aviation-equipment/ground-test-equipment/air-data-test-system/pitot_static_test_equipment",
  "/products/aviation-equipment/ground-test-equipment/automated-pitot-leak-tester/aircraft-pitot-static-tester":
    "/products/aviation-equipment/ground-test-equipment/air-data-test-system/pitot_static_test_equipment",
  "/products/aviation-equipment/ground-test-equipment/automated-pitot-leak-tester/aircraft_air_data_calibration_system":
    "/products/aviation-equipment/ground-test-equipment/air-data-test-system/aircraft_air_data_calibration_system",
  "/products/aviation-equipment/ground-test-equipment/automated-pitot-leak-tester/pitot_static_leak_tester":
    "/products/aviation-equipment/ground-test-equipment/automated-pitot-leak-tester",
  "/products/aviation-equipment/ground-test-equipment/automated-pitot-leak-tester/pitot_static_test_equipment":
    "/products/aviation-equipment/ground-test-equipment/air-data-test-system/pitot_static_test_equipment",
  "/products/aviation-equipment/ground-test-equipment/hydraulic-test-rig-htr/braking_and_steering_assemblies":
    "/products/aviation-equipment/ground-test-equipment/hydraulic-test-rig-htr",
  "/products/aviation-equipment/ground-test-equipment/hydraulic-test-rig-htr/cargo_door_actuation_systems":
    "/products/aviation-equipment/ground-test-equipment/hydraulic-test-rig-htr",
  "/products/aviation-equipment/ground-test-equipment/hydraulic-test-rig-htr/flap_and_slat_mechanisms":
    "/products/aviation-equipment/ground-test-equipment/hydraulic-test-rig-htr",
  "/products/aviation-equipment/ground-test-equipment/hydraulic-test-rig-htr/landing_gear":
    "/products/aviation-equipment/ground-test-equipment/hydraulic-test-rig-htr",
  "/products/aviation-equipment/ground-test-equipment/hydraulic-test-rig-htr/primary_and_secondary_flight_controls":
    "/products/aviation-equipment/ground-test-equipment/hydraulic-test-rig-htr",
  "/products/aviation-equipment/ground-test-equipment/hydraulic-test-rig-htr/rotor_blade_and_pitch_control_in_helicopters":
    "/products/aviation-equipment/ground-test-equipment/hydraulic-test-rig-htr",
  "/products/aviation-equipment/ground-test-equipment/brake-valve-test-rig/aircraft_testing_equipment":
    "/products/aviation-equipment/ground-test-equipment",
  "/products/aviation-equipment/ground-test-equipment/sasd-test-rig/aircraft-testing-equipment":
    "/products/aviation-equipment/ground-test-equipment",
  "/products/aviation-equipment/ground-test-equipment/brake-valve-test-rig/hydraulic_test_rig":
    "/products/aviation-equipment/ground-test-equipment/hydraulic-test-rig-htr",
  "/products/aviation-equipment/ground-test-equipment/sasd-test-rig/hydraulic-test-ig":
    "/products/aviation-equipment/ground-test-equipment/hydraulic-test-rig-htr",
  "/products/aviation-equipment/ground-test-equipment/sasd-test-rig/pneumatic-test-rig":
    "/products/aviation-equipment/ground-test-equipment/brake-valve-test-rig/pneumatic_test_rig",
  "/products/runway-spares/runway-lights/touchdown-zone-light/led-runway-lights":
    "/products/runway-spares/runway-lights/touchdown-zone-light/high-intensity-runway-lights",
  // @@CONSOLIDATED@@
};

export const REDIRECTS: Record<string, string> = { ...LEGACY, ...CONSOLIDATED };
