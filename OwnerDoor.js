local tycoon = script.Parent.Parent

local mainItems = tycoon:FindFirstChild("MainItems")
local values = tycoon:FindFirstChild("Values")

mainItems.OwnerDoor.Door.Touched:Connect(function(hit)
	if values.OwnerValue.Value == nil then
		local player = game.Players:GetPlayerFromCharacter(hit.Parent)
		if player then
			if player:FindFirstChild("HasTycoon").Value == false then
                                player:FindFirstChild("HasTycoon").Value = true
				values.OwnerValue.Value = player

				mainItems.OwnerDoor.Title.SurfaceGui.TextLabel.Text = tostring(values.OwnerValue.Value).."'s Tycoon"
			end
		end
	end
end)
