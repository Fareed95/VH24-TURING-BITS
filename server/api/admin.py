from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ('email', 'name', 'is_staff', 'is_superuser', 'trainer', 'domain')  # Added trainer and domain
    search_fields = ('email', 'name')
    ordering = ('email',)

    # Include trainer and domain in fieldsets
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('name', 'trainer', 'domain')}),  # Added trainer and domain
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login',)}),  # Removed 'date_joined'
    )

    # Ensure add_fieldsets also includes the new fields
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'name', 'password1', 'password2', 'trainer', 'domain'),  # Added trainer and domain
        }),
    )
