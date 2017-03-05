import os


#Config variables


current_folder = os.getcwd()

folder_galeries = os.path.join(current_folder, "assets/img")

liste_galeries = os.listdir(folder_galeries)

liste_galeries = [(dir.title()) for dir in liste_galeries if (os.path.isdir(os.path.join(folder_galeries,dir))) & (dir != ".DS_Store") & (dir != "home")]

print(liste_galeries)