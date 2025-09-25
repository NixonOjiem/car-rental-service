export interface Car {
  id: number
  model: string
  brand: string
  type: 'Sedan' | 'SUV' | 'Hatchback' | 'Truck' | 'Electric' | 'Van' | 'Coupe' | 'Wagon'
  image: string
  pricePerDay: number
  seats: number
  transmission: 'Automatic' | 'Manual'
  fuel: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric'
  location: string
  isAvailable: boolean
  rating?: number
}
