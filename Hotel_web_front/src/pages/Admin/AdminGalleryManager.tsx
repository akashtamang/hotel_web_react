import React, { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { FaPlus, FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa";
import type { GalleryPhoto } from "../../data/gallery";
import { defaultGalleryPhotos } from "../../data/gallery";

const AdminGalleryManager: React.FC = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(defaultGalleryPhotos);
  const [formData, setFormData] = useState({
    src: "",
    caption: "",
    category: "Rooms",
  });
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Load from localStorage if available, otherwise use defaults
    const stored = localStorage.getItem("gallery-photos");
    if (stored) {
      try {
        setPhotos(JSON.parse(stored));
      } catch {
        setPhotos(defaultGalleryPhotos);
      }
    }
  }, []);

  const saveToStorage = (updatedPhotos: GalleryPhoto[]) => {
    localStorage.setItem("gallery-photos", JSON.stringify(updatedPhotos));
    setSuccessMessage("Gallery updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleAddPhoto = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    if (!formData.src.trim() || !formData.caption.trim()) {
      setFormError("Image URL and caption are required.");
      return;
    }

    // Validate URL format
    try {
      new URL(formData.src);
    } catch {
      setFormError("Please enter a valid image URL.");
      return;
    }

    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const newPhoto: GalleryPhoto = {
      id,
      src: formData.src.trim(),
      caption: formData.caption.trim(),
      category: formData.category.trim() || "Rooms",
    };

    const updatedPhotos = [newPhoto, ...photos];
    setPhotos(updatedPhotos);
    saveToStorage(updatedPhotos);
    setFormData({ src: "", caption: "", category: "Rooms" });
  };

  const handleRemovePhoto = (id: string) => {
    const updatedPhotos = photos.filter((photo) => photo.id !== id);
    setPhotos(updatedPhotos);
    saveToStorage(updatedPhotos);
  };

  const handleMovePhoto = (id: string, direction: "up" | "down") => {
    const index = photos.findIndex((photo) => photo.id === id);
    if (index === -1) return;

    const newPhotos = [...photos];
    const newIndex = direction === "up" ? index - 1 : index + 1;

    if (newIndex < 0 || newIndex >= newPhotos.length) return;

    [newPhotos[index], newPhotos[newIndex]] = [
      newPhotos[newIndex],
      newPhotos[index],
    ];

    setPhotos(newPhotos);
    saveToStorage(newPhotos);
  };

  const handleResetGallery = () => {
    if (
      window.confirm(
        "Are you sure you want to reset the gallery to default photos? This cannot be undone."
      )
    ) {
      setPhotos(defaultGalleryPhotos);
      saveToStorage(defaultGalleryPhotos);
    }
  };

  const categories = Array.from(
    new Set(photos.map((photo) => photo.category))
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Gallery Manager</h1>
          <p className="text-gray-600 mt-1">
            Manage your hotel's photo gallery
          </p>
        </div>
        <button
          onClick={handleResetGallery}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
        >
          Reset to Defaults
        </button>
      </div>

      {/* Messages */}
      {successMessage && (
        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          ✓ {successMessage}
        </div>
      )}

      {formError && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          ✕ {formError}
        </div>
      )}

      {/* Add Photo Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Photo</h2>
        <form onSubmit={handleAddPhoto} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="url"
                value={formData.src}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, src: e.target.value }))
                }
                placeholder="https://example.com/photo.jpg"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">
                Caption
              </label>
              <input
                type="text"
                value={formData.caption}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, caption: e.target.value }))
                }
                placeholder="Describe the photo"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, category: e.target.value }))
                }
                placeholder="e.g., Rooms, Food, Nature"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition flex items-center justify-center gap-2"
          >
            <FaPlus /> Add Photo
          </button>
        </form>
      </div>

      {/* Photos List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            Photos ({photos.length})
          </h2>
        </div>

        {photos.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No photos yet. Add your first photo above!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Preview
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Caption
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {photos.map((photo, index) => (
                  <tr key={photo.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="h-12 w-20 rounded object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://via.placeholder.com/80?text=Invalid";
                        }}
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {photo.caption}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {photo.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleMovePhoto(photo.id, "up")}
                          disabled={index === 0}
                          className="p-2 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                          title="Move up"
                        >
                          <FaArrowUp size={14} />
                        </button>
                        <button
                          onClick={() => handleMovePhoto(photo.id, "down")}
                          disabled={index === photos.length - 1}
                          className="p-2 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                          title="Move down"
                        >
                          <FaArrowDown size={14} />
                        </button>
                        <button
                          onClick={() => handleRemovePhoto(photo.id)}
                          className="p-2 rounded bg-red-100 text-red-600 hover:bg-red-200 transition"
                          title="Delete photo"
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Categories Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <span
                key={cat}
                className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {cat}
              </span>
            ))
          ) : (
            <p className="text-blue-700">No categories yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminGalleryManager;
