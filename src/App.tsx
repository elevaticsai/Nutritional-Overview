import React from 'react';
import {
  Baby,
  Brain,
  Heart,
  Users,
  AlertTriangle,
  Dumbbell,
  Activity,
  ScrollText,
  Gauge,
  Wheat,
  Sandwich,
  Cookie,
} from 'lucide-react';

function NutritionCard({ title, value, unit, dailyValue, icon: Icon, color }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className="space-y-2">
        <p className="text-2xl font-bold">{value}{unit}</p>
        {dailyValue && (
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Daily Value</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${color}`}
                style={{ width: `${Math.min(dailyValue, 100)}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">{dailyValue}% DV</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ImpactIndicator({ level }) {
  const colors = {
    good: 'bg-emerald-500',
    moderate: 'bg-amber-500',
    bad: 'bg-red-500'
  };
  
  return (
    <div className="flex items-center gap-2 mt-3">
      <div className="flex gap-1">
        <div className={`h-2 w-8 rounded ${level === 'good' ? colors.good : 'bg-gray-200'}`}></div>
        <div className={`h-2 w-8 rounded ${level === 'moderate' ? colors.moderate : 'bg-gray-200'}`}></div>
        <div className={`h-2 w-8 rounded ${level === 'bad' ? colors.bad : 'bg-gray-200'}`}></div>
      </div>
      <span className={`text-sm ${
        level === 'good' ? 'text-emerald-600' : 
        level === 'moderate' ? 'text-amber-600' : 'text-red-600'
      }`}>
        {level.charAt(0).toUpperCase() + level.slice(1)} Impact
      </span>
    </div>
  );
}

function GroupCard({ title, icon: Icon, description, recommendations, cautions, impactLevel }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-blue-100">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {cautions && (
        <div className="mb-4">
          <div className="flex items-center gap-2 text-amber-600 mb-2">
            <AlertTriangle className="w-5 h-5" />
            <h4 className="font-semibold">Cautions</h4>
          </div>
          <p className="text-gray-600">{cautions}</p>
        </div>
      )}
      {recommendations && (
        <div className="flex items-center gap-2 text-emerald-600 mb-3">
          <ScrollText className="w-5 h-5" />
          <p className="text-sm">{recommendations}</p>
        </div>
      )}
      <ImpactIndicator level={impactLevel} />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Nutritional Overview</h1>
          <p className="text-gray-600">Per Slice – 43g Serving</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <NutritionCard
            title="Calories"
            value="110"
            unit="kcal"
            icon={Gauge}
            color="bg-red-500"
          />
          <NutritionCard
            title="Total Fat"
            value="2.5"
            unit="g"
            dailyValue={3}
            icon={Activity}
            color="bg-yellow-500"
          />
          <NutritionCard
            title="Protein"
            value="4"
            unit="g"
            icon={Dumbbell}
            color="bg-blue-500"
          />
          <NutritionCard
            title="Carbohydrates"
            value="19"
            unit="g"
            dailyValue={7}
            icon={Wheat}
            color="bg-green-500"
          />
          <NutritionCard
            title="Sodium"
            value="230"
            unit="mg"
            dailyValue={10}
            icon={Sandwich}
            color="bg-purple-500"
          />
          <NutritionCard
            title="Sugars"
            value="0"
            unit="g"
            dailyValue={0}
            icon={Cookie}
            color="bg-pink-500"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6">Impact on Different Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <GroupCard
            title="Children (3-12 years)"
            icon={Baby}
            description="Provides essential nutrients for growth and development including protein, fiber, calcium, and iron."
            cautions="Sodium content (230mg per slice) may be high for younger children if consumed in large quantities."
            recommendations="Suitable in moderation, monitor overall sodium intake."
            impactLevel="moderate"
          />
          <GroupCard
            title="Adults (13-60 years)"
            icon={Users}
            description="Provides complex carbohydrates and fiber for sustained energy and digestive health."
            cautions="Monitor sodium intake, especially with high-sodium diets."
            recommendations="Safe as part of a balanced diet. Pair with protein and healthy fats."
            impactLevel="good"
          />
          <GroupCard
            title="Older Adults (60-70 years)"
            icon={Brain}
            description="Contains fiber for digestion and cholesterol control, plus iron and calcium for bone health."
            cautions="Those with hypertension or kidney disease should limit sodium intake."
            recommendations="Suitable in moderation with other fiber-rich, low-sodium foods."
            impactLevel="moderate"
          />
          <GroupCard
            title="Pregnant Women"
            icon={Baby}
            description="Provides protein for fetal growth and fiber to support digestion."
            cautions="Limited calcium and iron content - supplementation may be needed."
            recommendations="Safe as part of balanced diet with prenatal vitamins."
            impactLevel="good"
          />
          <GroupCard
            title="People with Diabetes"
            icon={Activity}
            description="Contains no added sugars and fiber helps moderate blood sugar response."
            cautions="Contains 19g total carbohydrates - count in meal planning."
            recommendations="Safe in moderation, pair with protein or healthy fats."
            impactLevel="good"
          />
          <GroupCard
            title="High Cholesterol"
            icon={Heart}
            description="Low in fat with no saturated fat, contains beneficial fiber."
            cautions="Consider adding more fiber-rich foods alongside."
            recommendations="Safe and beneficial when part of a heart-healthy diet."
            impactLevel="good"
          />
        </div>

        <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" />
            Who Should Avoid This Bread
          </h2>
          <ul className="list-disc list-inside space-y-2 text-red-700">
            <li>People with gluten intolerance or celiac disease</li>
            <li>People with sesame allergy</li>
            <li>Individuals on strict low-sodium diets</li>
            <li>Children under 3 years old (limited portions only)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;